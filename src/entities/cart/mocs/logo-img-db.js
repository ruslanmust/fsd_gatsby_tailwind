export const isRetina = (first, second) => {
    if (window.devicePixelRatio >= 2) {
      return second
    }
    return first;
  };

export const images = [
    {
        png1x: '/shared/ui/images/profile-img/Image@1x.png',
        png2x: '/shared/ui/images/profile-img/Image@2x.png',
        id: 'png'
    },
    {
        webp1x: '/shared/ui/images/profile-img/Image@1x.webp',
        webp2x: '/shared/ui/images/profile-img/Image@2x.webp',
        id: 'webp'
    },
];