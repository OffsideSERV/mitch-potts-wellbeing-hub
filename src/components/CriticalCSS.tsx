import React from 'react';

const CriticalCSS = () => {
  return (
    <style>{`
      /* Critical above-the-fold styles to prevent render blocking */
      
      /* Base layout and typography */
      * {
        box-sizing: border-box;
      }
      
      body {
        font-family: ui-sans-serif, system-ui, sans-serif;
        line-height: 1.5;
        margin: 0;
        background: hsl(var(--background, 0 0% 100%));
        color: hsl(var(--foreground, 224 71.4% 4.1%));
      }
      
      /* Navigation critical styles */
      .nav-container {
        background: hsl(var(--background, 0 0% 100%));
        border-bottom: 1px solid hsl(var(--border, 214.3 31.8% 91.4%));
        position: sticky;
        top: 0;
        z-index: 50;
      }
      
      /* Hero section critical styles */
      .hero-section {
        background: linear-gradient(135deg, hsl(174 100% 29% / 0.1), hsl(174 60% 51% / 0.1));
        padding: 5rem 1rem;
        min-height: 70vh;
        display: flex;
        align-items: center;
      }
      
      .hero-title {
        font-size: clamp(2.5rem, 8vw, 6rem);
        font-weight: 700;
        line-height: 1.1;
        color: hsl(var(--foreground, 224 71.4% 4.1%));
        margin: 0 0 1rem 0;
      }
      
      .hero-highlight {
        color: hsl(var(--primary, 174 60% 51%));
      }
      
      .hero-description {
        font-size: 1.25rem;
        line-height: 1.6;
        color: hsl(var(--muted-foreground, 215.4 16.3% 46.9%));
        margin: 0 0 2rem 0;
      }
      
      /* Button critical styles */
      .btn-primary {
        background: hsl(var(--primary, 174 60% 51%));
        color: hsl(var(--primary-foreground, 0 0% 98%));
        padding: 0.75rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        transition: background-color 0.2s ease;
      }
      
      .btn-primary:hover {
        background: hsl(var(--primary, 174 60% 51%) / 0.9);
      }
      
      /* Layout containers */
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      /* Prevent layout shift for images */
      .lazy-image-container {
        aspect-ratio: 4/3;
        background: hsl(var(--muted, 210 40% 96%));
        border-radius: 1rem;
        overflow: hidden;
        position: relative;
      }
      
      .lazy-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
      }
      
      /* Grid critical styles */
      .grid {
        display: grid;
      }
      
      .grid-cols-1 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
      
      @media (min-width: 768px) {
        .md\\:grid-cols-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      
      @media (min-width: 1024px) {
        .lg\\:grid-cols-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }
      
      /* Spacing utilities */
      .gap-6 {
        gap: 1.5rem;
      }
      
      .gap-8 {
        gap: 2rem;
      }
      
      .p-4 {
        padding: 1rem;
      }
      
      .p-6 {
        padding: 1.5rem;
      }
      
      .mb-4 {
        margin-bottom: 1rem;
      }
      
      .mb-6 {
        margin-bottom: 1.5rem;
      }
      
      /* Flexbox utilities */
      .flex {
        display: flex;
      }
      
      .items-center {
        align-items: center;
      }
      
      .justify-center {
        justify-content: center;
      }
      
      .justify-between {
        justify-content: space-between;
      }
      
      /* Text utilities */
      .text-center {
        text-align: center;
      }
      
      .text-2xl {
        font-size: 1.5rem;
        line-height: 2rem;
      }
      
      .text-3xl {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }
      
      .font-bold {
        font-weight: 700;
      }
      
      .font-semibold {
        font-weight: 600;
      }
      
      /* Card styles */
      .card {
        background: hsl(var(--card, 0 0% 100%));
        border: 1px solid hsl(var(--border, 214.3 31.8% 91.4%));
        border-radius: 0.75rem;
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
      }
      
      /* Rounded utilities */
      .rounded-lg {
        border-radius: 0.5rem;
      }
      
      .rounded-xl {
        border-radius: 0.75rem;
      }
      
      .rounded-2xl {
        border-radius: 1rem;
      }
      
      /* Shadow utilities */
      .shadow-lg {
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      }
      
      .shadow-2xl {
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
      }
      
      /* Hide content that's not critical */
      .defer-load {
        opacity: 0;
        animation: fadeIn 0.3s ease-in-out 0.1s forwards;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `}</style>
  );
};

export default CriticalCSS;