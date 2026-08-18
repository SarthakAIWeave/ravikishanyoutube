export interface VideoItem {
  id: string;
  title: string;
  embedUrl: string;
  rawIframe?: string;
  thumbnail: string;
  duration: string;
  channelTitle: string;
  channelAvatar: string;
  views: string;
  uploadedAt: string;
  verified: boolean;
  category: string;
  description: string;
  tags: string[];
  likes: string;
  isSpecial7th?: boolean;
  isTopPool?: boolean;
}

export interface SidebarTabItem {
  id: string;
  title: string;
  iconName: string;
  badge?: string;
  description?: string;
  section?: 'main' | 'custom_bhojpuri' | 'subscriptions' | 'explore';
  active?: boolean;
}

export interface SoundItem {
  id: string;
  title: string;
  movie: string;
  audioText: string;
  duration: string;
  category: string;
}

export interface VideoComment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  timeAgo: string;
  likes: number;
  isUser?: boolean;
}
