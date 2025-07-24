export const projectData = {
  categories: [
    {
      label: 'All',
      key: 'all'
    },
    {
      label: 'TechStore',
      key: 'techstore'
    }
    // {
    //   label: 'NgocBich Store - Website Cosmetics',
    //   key: 'ngocbichstore'
    // }
  ],
  projects: [
    {
      id: 1,
      tags: ['React.js', 'Swiper', 'Tailwind CSS', 'Redux Toolkit'],
      des: 'An advanced eCommerce platform built with Spring Boot and React.js, featuring category trees, search products, shopping cart, basic order system, whitelist, user authentication via JWT',
      title: 'E-Commerce website',
      image: '/techgear-home.png',
      demoUrl: 'https://techgear-silk.vercel.app',
      githubUrl: 'https://github.com/TtPhong-FS/Ecommerce-techstore-client',
      category: 'techstore'
    },
    {
      id: 2,
      tags: ['React.js', 'Table Tanstack', 'Tailwind CSS', 'Redux Toolkit'],
      des: 'A dashboard panel for administrators to manage categories, category attributes, products, orders, and user accounts... Supports dark mode theme, secure basic with auth context & role-based access.',
      title: 'Dashboard Panel',
      image: '/techgear-dashboard.png',
      demoUrl: 'https://techgear-dashboard.vercel.app',
      githubUrl: 'https://github.com/TtPhong-FS/Dashboard-Panel-For-E-Commerce-TechStore',
      category: 'techstore'
    },
    {
      id: 3,
      tags: ['Restful API', 'Spring boot', 'Spring security', 'JWT authen', 'Mysql', 'Redis'],
      des: 'A dashboard panel for administrators to manage categories, category attributes, products, orders, and user accounts... Supports dark mode theme, secure basic with auth context & role-based access.',
      title: 'Backend System',
      image: '/be-techgear.png',
      demoUrl: '#',
      githubUrl: 'https://github.com/TtPhong-FS/Backend-TechStore.git',
      category: 'techstore'
    }
  ]
}
