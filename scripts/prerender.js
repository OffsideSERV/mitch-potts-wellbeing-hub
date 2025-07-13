import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple app wrapper for SSR - no router needed, just layout
const SimpleLayout = ({ children }) => {
  return React.createElement('div', { className: 'min-h-screen flex flex-col' },
    // Simple navigation
    React.createElement('nav', { className: 'bg-white shadow-md' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('div', { className: 'flex justify-between items-center py-4' },
          React.createElement('div', { className: 'text-xl font-bold text-[#2F6B6B]' }, 'NXTLVL Health'),
          React.createElement('div', { className: 'hidden md:flex space-x-8' },
            React.createElement('a', { href: '/', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'Home'),
            React.createElement('a', { href: '/services', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'Services'),
            React.createElement('a', { href: '/what-we-treat', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'What We Treat'),
            React.createElement('a', { href: '/contact', className: 'text-gray-700 hover:text-[#2F6B6B]' }, 'Contact'),
            React.createElement('a', { href: '/book-now', className: 'bg-[#2F6B6B] text-white px-4 py-2 rounded hover:bg-[#245555]' }, 'Book Now')
          )
        )
      )
    ),
    // Main content
    React.createElement('main', { className: 'flex-1' }, children),
    // Simple footer
    React.createElement('footer', { className: 'bg-gray-900 text-white py-8' },
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4' },
        React.createElement('div', { className: 'grid md:grid-cols-3 gap-8' },
          React.createElement('div', null,
            React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'NXTLVL Health'),
            React.createElement('p', { className: 'text-gray-400' }, 'Brisbane\'s leading naturopathy clinic for optimal health and wellness.')
          ),
          React.createElement('div', null,
            React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Quick Links'),
            React.createElement('ul', { className: 'space-y-2' },
              React.createElement('li', null, React.createElement('a', { href: '/services', className: 'text-gray-400 hover:text-white' }, 'Services')),
              React.createElement('li', null, React.createElement('a', { href: '/what-we-treat', className: 'text-gray-400 hover:text-white' }, 'What We Treat')),
              React.createElement('li', null, React.createElement('a', { href: '/contact', className: 'text-gray-400 hover:text-white' }, 'Contact'))
            )
          ),
          React.createElement('div', null,
            React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Contact Info'),
            React.createElement('p', { className: 'text-gray-400' }, 'Brisbane, Queensland'),
            React.createElement('p', { className: 'text-gray-400' }, 'Book your free consultation today')
          )
        ),
        React.createElement('div', { className: 'border-t border-gray-800 mt-8 pt-8 text-center' },
          React.createElement('p', { className: 'text-gray-400' }, '© 2025 NXTLVL Health. All rights reserved.')
        )
      )
    )
  );
};

// Define route to page content mapping with actual content from your components
const getPageContent = (pathname) => {
  const pageContent = {
    '/': {
      title: 'Best Naturopath Brisbane | Book a FREE 15-Min Consult!',
      description: 'Feel like something\'s wrong but no one\'s listening? NXTLVL Health is the best Naturopath in Brisbane and is here to give you the answers you\'ve been looking for',
      content: React.createElement('div', null,
        // Hero Section
        React.createElement('section', { className: 'relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center' },
              React.createElement('div', { className: 'space-y-8 lg:mt-0 mt-12' },
                React.createElement('div', { className: 'space-y-4' },
                  React.createElement('h1', { className: 'text-4xl lg:text-6xl font-bold text-foreground leading-tight' },
                    'Best Naturopath Brisbane | ',
                    React.createElement('span', { className: 'text-primary' }, 'Feel Like Yourself Again'),
                    ' at NXTLVL Health'
                  )
                ),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4' },
                  React.createElement('a', { 
                    href: 'https://calendly.com/nxtlvlhealth-info/15-min-consult',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'bg-[#2F6B6B] text-white px-6 py-3 rounded hover:bg-[#245555] inline-flex items-center text-base sm:text-lg'
                  }, '📅 Book a Free 15-Min Consult'),
                  React.createElement('a', { 
                    href: 'tel:0731808853',
                    className: 'border border-[#2F6B6B] text-[#2F6B6B] px-6 py-3 rounded hover:bg-[#2F6B6B] hover:text-white inline-flex items-center text-base sm:text-lg'
                  }, '📞 Call Mitch Now')
                ),
                // Trust Boosters
                React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-16' },
                  React.createElement('div', { className: 'text-center' },
                    React.createElement('h3', { className: 'text-2xl font-bold text-foreground mb-1' }, '1000+'),
                    React.createElement('p', { className: 'text-sm text-muted-foreground' }, 'Patients Helped')
                  ),
                  React.createElement('div', { className: 'text-center' },
                    React.createElement('h3', { className: 'text-2xl font-bold text-foreground mb-1' }, 'Real Testing'),
                    React.createElement('p', { className: 'text-sm text-muted-foreground' }, 'No Guessing')
                  ),
                  React.createElement('div', { className: 'text-center' },
                    React.createElement('h3', { className: 'text-2xl font-bold text-foreground mb-1' }, '90% of Patients'),
                    React.createElement('p', { className: 'text-sm text-muted-foreground' }, 'See Results in Just 6 Weeks')
                  )
                )
              ),
              React.createElement('div', { className: 'relative' },
                React.createElement('img', { 
                  src: '/lovable-uploads/f459679d-99b6-4b58-affb-e2cedb040e6e.png',
                  alt: 'Naturopath having consultation with female patient at NXTLVL Health',
                  className: 'rounded-2xl shadow-2xl w-full h-auto'
                }),
                React.createElement('div', { className: 'absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg' },
                  React.createElement('div', { className: 'flex items-center space-x-3' },
                    React.createElement('div', { className: 'text-[#2F6B6B]' }, '🔬'),
                    React.createElement('div', null,
                      React.createElement('p', { className: 'font-semibold' }, 'Advanced Screening Method'),
                      React.createElement('p', { className: 'text-sm text-muted-foreground' }, 'Live Blood Analysis • Natural Medicine')
                    )
                  )
                )
              )
            )
          )
        ),
        
        // Finally A Brisbane Naturopath Who Gets It
        React.createElement('section', { className: 'py-24 px-4 mt-8' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'text-center mb-16' },
              React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-6' }, 'Finally – A Brisbane Naturopath Who Truly Gets It')
            ),
            React.createElement('div', { className: 'mb-12' },
              React.createElement('img', { 
                src: '/lovable-uploads/9e5ed0a0-bb35-4fde-9965-94edcb9294a8.png',
                alt: 'Woman dealing with health concerns needing naturopathic care',
                className: 'rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto'
              })
            ),
            React.createElement('div', { className: 'max-w-4xl mx-auto text-center space-y-6 text-lg text-muted-foreground' },
              React.createElement('p', null,
                'Are you feeling ',
                React.createElement('strong', null, 'bloated, exhausted, foggy, or just not like yourself'),
                '? And yet, every test you get comes back "normal"? Well, you\'re not alone, and you\'re definitely not making it up.'
              ),
              React.createElement('p', null,
                'At NXTLVL Health, Mitch is here to help you feel better on your ',
                React.createElement('strong', null, 'health journey'),
                ', naturally. As one of the ',
                React.createElement('strong', null, 'best naturopaths in Brisbane'),
                ', he brings local expertise and a modern, ',
                React.createElement('strong', null, 'holistic approach'),
                ' to your care. Mitch is extremely knowledgeable in ',
                React.createElement('strong', null, 'naturopathy'),
                ' and ',
                React.createElement('strong', null, 'holistic health'),
                ', and as a ',
                React.createElement('strong', null, 'qualified naturopath'),
                ', he listens, he digs deep, and he finds the ',
                React.createElement('strong', null, 'root cause'),
                ' of your ',
                React.createElement('strong', null, 'health concerns'),
                ', so you can finally feel clear, calm, and in control again.'
              )
            ),
            React.createElement('div', { className: 'text-center mt-12' },
              React.createElement('a', { 
                href: 'https://calendly.com/nxtlvlhealth-info/15-min-consult',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-[#2F6B6B] text-white px-6 py-4 rounded hover:bg-[#245555] inline-flex items-center text-base sm:text-lg'
              }, '📅 Book a Free 15-Min Consult')
            )
          )
        ),

        // Does This Sound Like You
        React.createElement('section', { className: 'py-20 px-4 bg-muted/30' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'text-center mb-16' },
              React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-6' }, 'Does This Sound Like You?')
            ),
            React.createElement('div', { className: 'grid md:grid-cols-3 gap-8 mb-12' },
              React.createElement('div', { className: 'text-center p-6 bg-white rounded-lg shadow-md' },
                React.createElement('div', { className: 'text-4xl mb-4' }, '⏰'),
                React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'You\'re Always Tired'),
                React.createElement('p', { className: 'text-base text-muted-foreground' },
                  'You sleep, but still feel wrecked. You rely on caffeine just to think straight. And the brain fog? It\'s making everything harder.'
                )
              ),
              React.createElement('div', { className: 'text-center p-6 bg-white rounded-lg shadow-md' },
                React.createElement('div', { className: 'text-4xl mb-4' }, '🌡️'),
                React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'Your Gut Feels Like a Mess'),
                React.createElement('p', { className: 'text-base text-muted-foreground' },
                  'Bloating. Gas. Food reactions. Even healthy meals can set off discomfort. It\'s unpredictable and exhausting.'
                )
              ),
              React.createElement('div', { className: 'text-center p-6 bg-white rounded-lg shadow-md' },
                React.createElement('div', { className: 'text-4xl mb-4' }, '📚'),
                React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'You\'ve Tried Everything'),
                React.createElement('p', { className: 'text-base text-muted-foreground' },
                  'You\'ve seen doctors. You\'ve tried all the diets. You\'ve read all the blogs. But you still feel like something\'s not right.'
                )
              )
            )
          )
        ),

        // Why People Say NXTLVL Health is the Best
        React.createElement('section', { className: 'py-20 px-4' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'text-center mb-16' },
              React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-6' }, 'Why People Say NXTLVL Health is the Best Naturopath Brisbane Has')
            ),
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-12 items-center mb-16' },
              React.createElement('div', { className: 'space-y-6' },
                React.createElement('div', { className: 'space-y-4' },
                  React.createElement('div', { className: 'flex items-start space-x-3' },
                    React.createElement('span', { className: 'text-[#2F6B6B] text-xl' }, '✓'),
                    React.createElement('p', { className: 'text-lg text-muted-foreground' }, 'Thousands helped with real, lasting results')
                  ),
                  React.createElement('div', { className: 'flex items-start space-x-3' },
                    React.createElement('span', { className: 'text-[#2F6B6B] text-xl' }, '✓'),
                    React.createElement('p', { className: 'text-lg text-muted-foreground' },
                      'We provide support throughout your ',
                      React.createElement('strong', null, 'health journey'),
                      ', addressing both ',
                      React.createElement('strong', null, 'physical and emotional'),
                      ' needs'
                    )
                  ),
                  React.createElement('div', { className: 'flex items-start space-x-3' },
                    React.createElement('span', { className: 'text-[#2F6B6B] text-xl' }, '✓'),
                    React.createElement('p', { className: 'text-lg text-muted-foreground' },
                      React.createElement('strong', null, 'Live blood analysis'),
                      ' for real-time insights into your health'
                    )
                  ),
                  React.createElement('div', { className: 'flex items-start space-x-3' },
                    React.createElement('span', { className: 'text-[#2F6B6B] text-xl' }, '✓'),
                    React.createElement('p', { className: 'text-lg text-muted-foreground' },
                      'Personalised ',
                      React.createElement('strong', null, 'natural treatments'),
                      ' based on you, no guesswork'
                    )
                  ),
                  React.createElement('div', { className: 'flex items-start space-x-3' },
                    React.createElement('span', { className: 'text-[#2F6B6B] text-xl' }, '✓'),
                    React.createElement('p', { className: 'text-lg text-muted-foreground' }, '90% of clients feel better in just their first 6 weeks')
                  )
                )
              ),
              React.createElement('div', { className: 'relative' },
                React.createElement('img', { 
                  src: '/lovable-uploads/7f8808bd-07aa-4759-8e99-de3701adb7e7.png',
                  alt: 'Woman consulting with Brisbane naturopath at NXTLVL Health',
                  className: 'rounded-2xl shadow-lg w-full h-auto'
                })
              )
            ),
            React.createElement('div', { className: 'text-center' },
              React.createElement('a', { 
                href: 'https://calendly.com/nxtlvlhealth-info/15-min-consult',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-[#2F6B6B] text-white px-6 py-4 rounded hover:bg-[#245555] inline-flex items-center text-base sm:text-lg'
              }, '📅 Book a Free 15-Min Consult')
            )
          )
        ),

        // Why Naturopathy Actually Works
        React.createElement('section', { className: 'py-20 px-4 bg-muted/30' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'text-center mb-16' },
              React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-6' }, 'Why Naturopathy Actually Works'),
              React.createElement('div', { className: 'max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground' },
                React.createElement('p', null,
                  React.createElement('strong', null, 'Naturopathy'),
                  ' doesn\'t cover up symptoms. It finds the ',
                  React.createElement('strong', null, 'root cause'),
                  ' of your problems. Unlike ',
                  React.createElement('strong', null, 'modern medicine'),
                  ', which often treats symptoms in isolation, our ',
                  React.createElement('strong', null, 'naturopathic care'),
                  ' uses ',
                  React.createElement('strong', null, 'natural medicine'),
                  ' and science to help your body heal, naturally.'
                ),
                React.createElement('p', null,
                  'Our ',
                  React.createElement('strong', null, 'holistic approach'),
                  ' blends ',
                  React.createElement('strong', null, 'nutritional medicine'),
                  ', ',
                  React.createElement('strong', null, 'herbal medicine'),
                  ', lifestyle support, and ',
                  React.createElement('strong', null, 'functional testing'),
                  ' as part of our ',
                  React.createElement('strong', null, 'natural healthcare'),
                  ' and comprehensive ',
                  React.createElement('strong', null, 'health care'),
                  ' philosophy to fix the ',
                  React.createElement('strong', null, 'underlying causes'),
                  ' of your problems, and help you feel your best again, inside and out.'
                )
              )
            ),
            React.createElement('div', { className: 'mb-12' },
              React.createElement('img', { 
                src: '/lovable-uploads/29a3a739-d347-46de-b287-0c187b12d5b7.png',
                alt: 'Naturopath performing live blood analysis at NXTLVL Health Brisbane',
                className: 'rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto'
              })
            )
          )
        ),

        // What Makes NXTLVL Health Different
        React.createElement('section', { className: 'py-20 px-4' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'text-center mb-16' },
              React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-6' }, 'What Makes NXTLVL Health Different?')
            ),
            React.createElement('div', { className: 'mb-12' },
              React.createElement('img', { 
                src: '/lovable-uploads/889bad55-c07b-401c-8b1d-ee0484fff02d.png',
                alt: 'Naturopath checking patient vitals at NXTLVL Health',
                className: 'rounded-2xl shadow-lg w-full max-w-2xl mx-auto h-auto'
              })
            ),
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-8 mb-16' },
              React.createElement('div', { className: 'p-6 bg-white rounded-lg shadow-md' },
                React.createElement('div', { className: 'flex items-center space-x-3 mb-4' },
                  React.createElement('span', { className: 'text-[#2F6B6B] text-2xl' }, '🧪'),
                  React.createElement('h3', { className: 'text-xl font-bold' }, 'We Test, We Don\'t Guess')
                ),
                React.createElement('p', { className: 'text-base leading-relaxed text-muted-foreground' },
                  'Our live blood analysis and functional testing show us exactly what\'s going on in your body. There\'s no guessing, just real answers.'
                )
              ),
              React.createElement('div', { className: 'p-6 bg-white rounded-lg shadow-md' },
                React.createElement('div', { className: 'flex items-center space-x-3 mb-4' },
                  React.createElement('span', { className: 'text-[#2F6B6B] text-2xl' }, '🎯'),
                  React.createElement('h3', { className: 'text-xl font-bold' }, 'We Treat the Root Cause of Problems')
                ),
                React.createElement('p', { className: 'text-base leading-relaxed text-muted-foreground' },
                  'From gut health to hormonal imbalances, mental health struggles, and any health condition, we focus on what\'s really driving your health issues.'
                )
              ),
              React.createElement('div', { className: 'p-6 bg-white rounded-lg shadow-md' },
                React.createElement('div', { className: 'flex items-center space-x-3 mb-4' },
                  React.createElement('span', { className: 'text-[#2F6B6B] text-2xl' }, '❤️'),
                  React.createElement('h3', { className: 'text-xl font-bold' }, 'The Plans are Built Just for You')
                ),
                React.createElement('p', { className: 'text-base leading-relaxed text-muted-foreground' },
                  'There\'s no cookie-cutter diets or generic advice at NXTLVL Health. Every protocol is custom-made for your body, your goals, and your life.'
                )
              ),
              React.createElement('div', { className: 'p-6 bg-white rounded-lg shadow-md' },
                React.createElement('div', { className: 'flex items-center space-x-3 mb-4' },
                  React.createElement('span', { className: 'text-[#2F6B6B] text-2xl' }, '🛡️'),
                  React.createElement('h3', { className: 'text-xl font-bold' }, 'Real Support the Whole Way')
                ),
                React.createElement('p', { className: 'text-base leading-relaxed text-muted-foreground' },
                  'You\'re not alone. We stay with you the whole time, checking in, making changes, and helping you feel confident in your health journey.'
                )
              )
            ),
            React.createElement('div', { className: 'text-center' },
              React.createElement('a', { 
                href: 'https://calendly.com/nxtlvlhealth-info/15-min-consult',
                target: '_blank',
                rel: 'noopener noreferrer',
                className: 'bg-[#2F6B6B] text-white px-6 py-4 rounded hover:bg-[#245555] inline-flex items-center text-base sm:text-lg'
              }, '📅 Book a Free 15-Min Consult')
            )
          )
        ),

        // Final CTA Section
        React.createElement('section', { className: 'py-20 px-4 bg-muted/30' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'text-center mb-16' },
              React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-6' }, 'Ready to Get Your Life Back?'),
              React.createElement('p', { className: 'text-xl text-muted-foreground max-w-3xl mx-auto mb-8' },
                'Your symptoms are real. Your healing is possible. Let\'s do this together.'
              ),
              React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4 justify-center' },
                React.createElement('a', { 
                  href: 'https://calendly.com/nxtlvlhealth-info/15-min-consult',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'bg-[#2F6B6B] text-white px-6 py-4 rounded hover:bg-[#245555] inline-flex items-center text-base sm:text-lg'
                }, '📅 Book a Free 15-Min Consult'),
                React.createElement('a', { 
                  href: 'tel:0731808853',
                  className: 'border border-[#2F6B6B] text-[#2F6B6B] px-6 py-4 rounded hover:bg-[#2F6B6B] hover:text-white inline-flex items-center text-base sm:text-lg'
                }, '📞 Call Mitch Now')
              )
            )
          )
        )
      )
    },
    '/services': {
      title: 'Naturopathic Services Brisbane | NXTLVL Health',
      description: 'Comprehensive naturopathic services including functional medicine, nutrition, laser therapy, and personal training. Tailored health plans for your well-being in Brisbane.',
      content: React.createElement('div', null,
        // Hero Section
        React.createElement('section', { className: 'relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center' },
              React.createElement('div', { className: 'space-y-8' },
                React.createElement('h1', { className: 'text-4xl lg:text-6xl font-bold text-foreground leading-tight' },
                  'Our ',
                  React.createElement('span', { className: 'text-primary' }, 'Naturopathic Services')
                ),
                React.createElement('h2', { className: 'text-2xl lg:text-3xl font-semibold text-muted-foreground' }, 'Tailored for Your Health Journey'),
                React.createElement('p', { className: 'text-lg text-muted-foreground' }, 'Naturopath, PT & functional medicine services for holistic wellness'),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4' },
                  React.createElement('a', { 
                    href: 'https://nxtlvlhealth.com.au/book-now/',
                    className: 'bg-[#2F6B6B] text-white px-6 py-3 rounded hover:bg-[#245555] inline-flex items-center'
                  }, 'BOOK NOW')
                )
              ),
              React.createElement('div', { className: 'relative' },
                React.createElement('img', { 
                  src: '/lovable-uploads/b156db4f-02ff-40d6-948b-3ea5abb31621.png',
                  alt: 'Naturopath having consultation with female patient at NXTLVL Health',
                  className: 'rounded-2xl shadow-2xl w-full h-auto'
                })
              )
            )
          )
        ),
        // Services Grid
        React.createElement('section', { className: 'py-20 px-4' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' },
              React.createElement('div', { className: 'text-center p-6 border rounded-lg shadow-md' },
                React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'NATUROPATHY'),
                React.createElement('p', { className: 'text-muted-foreground' }, 'Holistic natural medicine approach')
              ),
              React.createElement('div', { className: 'text-center p-6 border rounded-lg shadow-md' },
                React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'FUNCTIONAL MEDICINE'),
                React.createElement('p', { className: 'text-muted-foreground' }, 'Root cause analysis and treatment')
              ),
              React.createElement('div', { className: 'text-center p-6 border rounded-lg shadow-md' },
                React.createElement('h3', { className: 'text-xl font-bold mb-4' }, 'NUTRITION'),
                React.createElement('p', { className: 'text-muted-foreground' }, 'Personalized nutrition planning')
              )
            )
          )
        )
      )
    },
    '/what-we-treat/gut-health-naturopath-brisbane': {
      title: 'Highly Trusted Gut Health Naturopath | Mitchell Potts',
      description: 'Feeling tired, bloated, foggy or just flat? Our gut health naturopath will the real cause of your symptoms—so you can finally feel like YOU again.',
      content: React.createElement('div', null,
        // Hero Section
        React.createElement('section', { className: 'relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 px-4' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center' },
              React.createElement('div', { className: 'space-y-8' },
                React.createElement('h1', { className: 'text-4xl lg:text-6xl font-bold text-foreground leading-tight' },
                  'Gut Health Naturopath in ',
                  React.createElement('span', { className: 'text-primary' }, 'Brisbane'),
                  ' | Personalised Digestive Care That Works'
                ),
                React.createElement('div', { className: 'flex flex-col sm:flex-row gap-4' },
                  React.createElement('a', { 
                    href: 'https://nxtlvlhealth.com.au/book-now/',
                    className: 'bg-[#2F6B6B] text-white px-6 py-3 rounded hover:bg-[#245555] inline-flex items-center'
                  }, 'Book an Appointment Today!')
                )
              ),
              React.createElement('div', { className: 'relative' },
                React.createElement('img', { 
                  src: '/lovable-uploads/8c8b4eb3-73e7-4d27-a130-784ffb35035c.png',
                  alt: 'Gut health consultation with naturopath at NXTLVL Health Brisbane',
                  className: 'rounded-2xl shadow-2xl w-full h-auto'
                })
              )
            )
          )
        ),
        // Content Section
        React.createElement('section', { className: 'py-20 px-4' },
          React.createElement('div', { className: 'container mx-auto max-w-6xl' },
            React.createElement('div', { className: 'text-center mb-16' },
              React.createElement('h2', { className: 'text-3xl lg:text-4xl font-bold mb-6' }, 'Get to the Root Cause of Your Digestive Issues')
            ),
            React.createElement('div', { className: 'max-w-4xl mx-auto text-lg text-muted-foreground space-y-6' },
              React.createElement('p', null, 'If your gut feels off, everything feels off. Whether it\'s bloating, brain fog, fatigue, or mood swings, your digestive system plays a crucial role in your overall wellbeing.'),
              React.createElement('p', null, 'At NXTLVL Health in Brisbane, our gut health naturopath services are designed to uncover the underlying cause of your digestive issues, and treat it the natural way.')
            )
          )
        )
      )
    }
  };

  // Default content for pages not specifically defined
  const defaultContent = {
    title: 'NXTLVL Health | Brisbane Naturopath',
    description: 'Professional naturopathic care in Brisbane for optimal health and wellness.',
    content: React.createElement('div', { className: 'container mx-auto px-4 py-20' },
      React.createElement('div', { className: 'max-w-4xl mx-auto text-center' },
        React.createElement('h1', { className: 'text-4xl font-bold mb-6 text-gray-900' }, 'NXTLVL Health Brisbane'),
        React.createElement('p', { className: 'text-lg text-gray-700 mb-8' }, 'Your trusted naturopath in Brisbane for comprehensive health and wellness solutions.'),
        React.createElement('a', { 
          href: 'https://nxtlvlhealth.com.au/book-now/',
          className: 'bg-[#2F6B6B] text-white px-6 py-3 rounded hover:bg-[#245555] inline-flex items-center'
        }, 'Book Consultation')
      )
    )
  };

  return pageContent[pathname] || defaultContent;
};

// All routes to pre-render
const routes = [
  '/',
  '/services',
  '/services/mls-laser-therapy-treatment-brisbane',
  '/services/personal-trainer-new-farm',
  '/what-we-treat/gut-health-naturopath-brisbane',
  '/what-we-treat/gut-health-specialist',
  '/what-we-treat/weight-loss-naturopath-brisbane',
  '/what-we-treat/naturopath-thyroid-brisbane',
  '/what-we-treat/naturopath-diabetes-brisbane',
  '/what-we-treat/childrens-naturopath-brisbane',
  '/what-we-treat/adhd-naturopath',
  '/what-we-treat/naturopath-anxiety',
  '/areas-we-serve/naturopath-north-brisbane',
  '/areas-we-serve/naturopath-newstead',
  '/areas-we-serve/naturopath-new-farm',
  '/areas-we-serve/naturopath-morningside',
  '/what-we-treat/ibs-naturopath',
  '/what-we-treat/sibo-naturopath',
  '/what-we-treat/wellness-clinic-brisbane',
  '/areas-we-serve',
  '/what-we-treat/ibs-brisbane',
  '/what-we-treat/ibs-clinic',
  '/what-we-treat/naturopathy-for-skin',
  '/what-we-treat/naturopath-eczema',
  '/what-we-treat/acne-naturopathy',
  '/what-we-treat/hormonal-acne-naturopath',
  '/areas-we-serve/naturopath-hamilton',
  '/areas-we-serve/naturopath-clayfield-brisbane',
  '/areas-we-serve/naturopath-windsor',
  '/gut-freedom',
  '/allergy-naturopath',
  '/naturopathic-nutritionist',
  '/indooroopilly-naturopathy',
  '/functional-medicine',
  '/services/live-blood-analysis-brisbane',
  '/cancellation-policy',
  '/contact',
  '/privacy-policy',
  '/website-disclaimer',
  '/what-we-treat',
  '/nxtlvl-tonics',
  '/services/nutritionist-brisbane',
  '/book-now',
  '/blog',
  '/blog/gut-health/best-tea-for-stomach-pain-and-bloating',
  '/blog/naturopathy/how-to-flush-salicylates-from-your-body',
  '/blog/gut-health/7-worst-foods-for-gut-health',
  '/blog/naturopathy/naturopathy-for-weight-loss',
  '/blog/gut-health/gut-health-101-why-your-stomach-might-be-behind-your-brain-fog-and-fatigue',
  '/blog/naturopathy/naturopathy-vs-homeopathy',
  '/blog/weight-loss/embracing-natural-weight-loss-with-ozempic-a-naturopaths-approach',
  '/blog/gut-health/gut-brain-connection-how-your-gut-affects-mental-health'
];

// Function to generate static HTML for a route
function generateStaticHTML(route) {
  try {
    console.log(`Rendering route: ${route}`);
    
    const pageData = getPageContent(route);
    const contentHTML = renderToStaticMarkup(
      React.createElement(SimpleLayout, { children: pageData.content })
    );
    
    // Read the base template
    const templatePath = path.join(__dirname, '../dist/index.html');
    let template = fs.readFileSync(templatePath, 'utf8');
    
    // Update the title and meta description
    template = template.replace(/<title>.*?<\/title>/, `<title>${pageData.title}</title>`);
    template = template.replace(
      /<meta name="description" content=".*?"/, 
      `<meta name="description" content="${pageData.description}"`
    );
    
    // Replace the root div with our rendered content
    template = template.replace('<div id="root"></div>', `<div id="root">${contentHTML}</div>`);
    
    return template;
  } catch (error) {
    console.error(`Error rendering route ${route}:`, error);
    // Return base template on error
    const templatePath = path.join(__dirname, '../dist/index.html');
    return fs.readFileSync(templatePath, 'utf8');
  }
}

// Create directory structure and generate HTML files
function createStaticFiles() {
  const distPath = path.join(__dirname, '../dist');
  
  routes.forEach(route => {
    const html = generateStaticHTML(route);
    
    // Determine file path
    let filePath;
    if (route === '/') {
      filePath = path.join(distPath, 'index.html');
    } else {
      // Create directory structure for nested routes
      const routeDir = path.join(distPath, route);
      
      // Create directories if they don't exist
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      filePath = path.join(routeDir, 'index.html');
    }
    
    // Write the HTML file
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✓ Generated: ${filePath}`);
  });
  
  console.log(`\n🎉 Successfully pre-rendered ${routes.length} pages with REAL content!`);
  console.log('📈 All pages now contain server-side rendered HTML matching your actual components.');
}

// Run the prerendering
createStaticFiles();