import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SeoMeta({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top of window on page navigation
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Update document title
    if (title) {
      document.title = `${title} | Sai Darshan Tour & Travel, Shirdi`;
    }

    // Update meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [location.pathname, title, description]);

  return null;
}
