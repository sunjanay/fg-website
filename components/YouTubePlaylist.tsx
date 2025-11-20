"use client";

import { useState, useEffect } from 'react';
import { IconPlayerPlay } from '@tabler/icons-react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  date: string;
  url: string;
}

interface YouTubePlaylistProps {
  playlistId: string;
  maxResults?: number;
}

export default function YouTubePlaylist({ playlistId, maxResults = 10 }: YouTubePlaylistProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const parseDuration = (duration: string) => {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return 'N/A';

    const hours = parseInt(match[1]) || 0;
    const minutes = parseInt(match[2]) || 0;
    const seconds = parseInt(match[3]) || 0;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  useEffect(() => {
    const loadYouTubeVideos = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

        if (!apiKey) {
          throw new Error('YouTube API key not found');
        }

        // Get videos from playlist
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${apiKey}`
        );

        if (!playlistResponse.ok) {
          throw new Error('Failed to fetch playlist data');
        }

        const playlistData = await playlistResponse.json();

        console.log('Playlist API Response:', playlistData);

        if (!playlistData.items) {
          console.error('No items in playlist response:', playlistData);
          throw new Error('No videos found');
        }

        // Get video details for duration
        const videoIds = playlistData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoIds}&key=${apiKey}`
        );

        if (!videosResponse.ok) {
          throw new Error('Failed to fetch video details');
        }

        const videosData = await videosResponse.json();

        // Create duration lookup
        const durationLookup: { [key: string]: string } = {};
        videosData.items.forEach((video: any) => {
          durationLookup[video.id] = parseDuration(video.contentDetails.duration);
        });

        const fetchedVideos: Video[] = playlistData.items.map((item: any) => {
          const snippet = item.snippet;
          const videoId = snippet.resourceId.videoId;

          return {
            id: videoId,
            title: snippet.title,
            description: snippet.description || '',
            thumbnail: snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || '',
            duration: durationLookup[videoId] || 'N/A',
            date: snippet.publishedAt,
            url: `https://youtube.com/watch?v=${videoId}`
          };
        });

        setVideos(fetchedVideos);
        setLoading(false);
      } catch (error) {
        console.error('Error loading YouTube videos:', error);
        setError(error instanceof Error ? error.message : 'Failed to load videos');
        setLoading(false);
      }
    };

    loadYouTubeVideos();
  }, [playlistId, maxResults]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E5F99]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#D6E9F5] hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
          onClick={() => window.open(video.url, '_blank')}
        >
          <div className="relative aspect-video">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-[#1E5F99] rounded-full p-3">
                <IconPlayerPlay className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-[#1E5F99] mb-2 line-clamp-2 group-hover:text-[#2C3E50] transition-colors">
              {video.title}
            </h3>
            <p className="text-[#2C3E50] text-sm line-clamp-2 leading-relaxed mb-3">
              {video.description}
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>⏱️ {video.duration}</span>
              <span>📅 {formatDate(video.date)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}