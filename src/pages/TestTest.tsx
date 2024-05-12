import React from 'react';

interface Post {
  id: number;
  title: string;
  author: string;
  timestamp: string;
  content: string;
}

interface Notification {
  id: number;
  message: string;
}

interface Friend {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
}

const ForumHomePage: React.FC = () => {
  // Sample data
  const posts: Post[] = [
    {
      id: 1,
      title: 'Introduction to React',
      author: 'John Doe',
      timestamp: '2 hours ago',
      content: 'React is a popular JavaScript library for building user interfaces...',
    },
    {
      id: 2,
      title: 'Tips for Effective Communication',
      author: 'Jane Smith',
      timestamp: '1 day ago',
      content: 'Effective communication is key to success in both personal and professional life...',
    },
    // Add more sample posts
  ];

  const trendingTopics: string[] = ['#JavaScript', '#WebDevelopment', '#DesignPatterns', '#CareerAdvice'];

  const notifications: Notification[] = [
    { id: 1, message: 'New reply to your post' },
    { id: 2, message: 'You have a new follower' },
    // Add more sample notifications
  ];

  const onlineFriends: Friend[] = [
    { id: 1, name: 'Alice', avatar: 'alice.png', isOnline: true },
    { id: 2, name: 'Bob', avatar: 'bob.png', isOnline: false },
    // Add more sample friends
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        {/* Header content */}
      </header>

      <main className="container mx-auto px-4 py-8 grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">User Feed</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="border-b pb-4">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <div className="flex items-center mt-2 mb-4">
                    <img src={`avatars/${post.author}.png`} alt={post.author} className="h-8 w-8 rounded-full mr-2" />
                    <span className="text-gray-500 text-sm">{post.author}</span>
                    <span className="text-gray-400 text-xs ml-auto">{post.timestamp}</span>
                  </div>
                  <p className="text-gray-700">{post.content}</p>
                  <div className="mt-4 flex space-x-4">
                    <button className="text-blue-500 hover:underline">
                      <i className="far fa-thumbs-up mr-1"></i> Like
                    </button>
                    <button className="text-blue-500 hover:underline">
                      <i className="far fa-comment-alt mr-1"></i> Comment
                    </button>
                    <button className="text-blue-500 hover:underline">
                      <i className="fas fa-share mr-1"></i> Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Trending Topics</h2>
            <div className="space-y-2">
              {trendingTopics.map((topic) => (
                <div key={topic} className="flex items-center">
                  <i className="fas fa-hashtag text-blue-500 mr-2"></i>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <img src="avatar.png" alt="User Avatar" className="h-10 w-10 rounded-full mr-2" />
              <h2 className="text-xl font-semibold">User Sidebar</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-center mb-2">
                    <i className="fas fa-bell text-blue-500 mr-2"></i>
                    <span className="text-gray-700">{notification.message}</span>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Online Friends</h3>
                {onlineFriends.map((friend) => (
                  <div key={friend.id} className="flex items-center mb-2">
                    <img src={`avatars/${friend.avatar}`} alt={friend.name} className="h-8 w-8 rounded-full mr-2" />
                    <span className="text-gray-700">{friend.name}</span>
                    {friend.isOnline && (
                      <span className="ml-auto text-green-500">
                        <i className="fas fa-circle"></i>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white shadow">
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default ForumHomePage;