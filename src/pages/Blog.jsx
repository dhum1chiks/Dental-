import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg mt-8">
      
      <header className="text-center max-w-3xl mx-auto mb-8">
        <h1 className="text-display-lg font-display-lg text-primary mb-4">Dental Health Insights</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Expert advice, clinical updates, and practical tips for maintaining optimal oral health.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Main Content Area (Left/Center) */}
        <div className="lg:col-span-8 flex flex-col gap-stack-lg">
          
          {/* Featured Hero Post */}
          <article className="bg-surface-container-low rounded-[24px] overflow-hidden group cursor-pointer shadow-[0px_4px_20px_rgba(15,76,129,0.12)] hover:shadow-[0px_10px_30px_rgba(15,76,129,0.15)] transition-all duration-300 relative">
            <div className="w-full h-80 bg-surface-container-high relative overflow-hidden">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="A modern, brightly lit dental clinic room with state-of-the-art equipment" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC5LhyAfNYBjfU0DZ7r0uArWyl18HClr1o90THDtcvvEUKtOgo8rxEqBE20KQa1kDz6unRiSD8h2A-224Znh81tQdmH8mP5XIjhI_nh3V3izSD2Bo-1FgKxEBwJg1UVGc2TqCKe8wUgFfuICjA6P-v4JUkngaFZgpWxkx3f-zLEn2F89X2tX7X0b1F67xC-zt1mDfGWuz48VeWhtmIjYFivnb90i5q3SxjuAlxWDjidzH-93OSOR-nfY8VP3U9Bo4KoMJ7UWUC6Q"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md font-label-md mb-3">Clinical Innovations</span>
                <h2 className="text-headline-lg font-headline-lg text-white mb-2 leading-tight">The Future of Painless Dentistry: Laser Technology Explained</h2>
                <div className="flex items-center gap-4 text-surface-container-low text-body-sm font-body-sm">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">calendar_today</span> Oct 12, 2024</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">person</span> Dr. Sarah Jenkins</span>
                </div>
              </div>
            </div>
          </article>

          {/* Blog Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Card 1 */}
            <article className="bg-white rounded-[24px] p-6 shadow-sm border border-surface-container-high hover:shadow-[0px_10px_30px_rgba(15,76,129,0.15)] transition-all duration-300 flex flex-col gap-4">
              <div className="h-48 rounded-[16px] overflow-hidden mb-2">
                <img className="w-full h-full object-cover" alt="Close up of a person with a perfect, bright white smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvZfXMZDxfVd_C3s_sG0UuKwVkyUVsitICFScjvgBWNor_j8FGvIWvELXlV0NFdqPR7NabKr4Uqim1BRg5k9y2qwZedC39X3vB8HyZNNxtsTCYxKcpKhKyjl4Be3SCB4zluzpqt2rRJbBbGrybodWMLaeqis5l6KD4rGk1tyVx-Pzh-QedHkA4V0ph01uu2j1-GZ9t9rSXCOeDjsutoT_78bX4UuKsV5wUNckrRo0TlnN1l3emWI2-Ka1ryqGJ-A4GHKGtOxriag"/>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-surface-container text-primary-container px-3 py-1 rounded-full text-label-md font-label-md">Oral Hygiene</span>
                <span className="text-on-surface-variant text-body-sm font-body-sm">Oct 05, 2024</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary leading-snug hover:text-secondary transition-colors cursor-pointer">5 Daily Habits for a Cavity-Free Smile</h3>
              <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">Discover the essential daily routines that go beyond just brushing twice a day to ensure long-term dental health and prevent decay.</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-on-surface-variant text-body-sm font-body-sm">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">MR</div>
                <span>Mark Roberts, RDH</span>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-[24px] p-6 shadow-sm border border-surface-container-high hover:shadow-[0px_10px_30px_rgba(15,76,129,0.15)] transition-all duration-300 flex flex-col gap-4">
              <div className="h-48 rounded-[16px] overflow-hidden mb-2">
                <img className="w-full h-full object-cover" alt="A macro shot of clear orthodontic aligners" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD5_EP4lp7xCW2cYe6QnZ30-MW32W6Z_vryDwdAHegE40hkHGQoDSFv3ZuCViWjhiVzAMmxZSssQJPcBXHD_vGBUfusw6jSzQsjdWjXsqx7z1vElUrVl5dO3LHHU8QUtDgxE66IIvYCc2Z5pEC3ZkmZFNfUm2pUv52bSylpXAMTdMbY45lN0QVzUJMBU0qYJRQkC53E9WOb2-tH7QHOwKJj9aaeNbvdyRqsPEokNdZeTbUnle-gxQD1fwH2w9TNvsJ54p99YMh8g"/>
              </div>
              <div className="flex items-center justify-between">
                <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-label-md font-label-md">Orthodontics</span>
                <span className="text-on-surface-variant text-body-sm font-body-sm">Sep 28, 2024</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary leading-snug hover:text-secondary transition-colors cursor-pointer">Clear Aligners vs. Traditional Braces</h3>
              <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">An objective comparison to help you decide which orthodontic treatment path is best for your lifestyle and clinical needs.</p>
              <div className="mt-auto pt-4 flex items-center gap-2 text-on-surface-variant text-body-sm font-body-sm">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">SJ</div>
                <span>Dr. Sarah Jenkins</span>
              </div>
            </article>

            {/* Card 3 (Full width in this grid) */}
            <article className="bg-white rounded-[24px] p-6 shadow-sm border border-surface-container-high hover:shadow-[0px_10px_30px_rgba(15,76,129,0.15)] transition-all duration-300 flex flex-col gap-4 md:col-span-2">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 h-48 md:h-full rounded-[16px] overflow-hidden shrink-0">
                  <img className="w-full h-full object-cover" alt="Pediatric dentist gently examining a child" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8V-gjkpKHUj-s7Oh2gAi01CnHdmuFHInWifE9sW8d5xv_2k0XH5KFVMSeTLLbdVSVdDhBid0FXHbDsqt-6mROSGHb-UVMq6E_jP8MYv3_IWIVbmiad48_PF8UHri6K2aKHdHA_xCk0Ni7mFsHtkgmsuU6f4nhoN-o6BMiPW-BQfKeKKEa9Yzkzupb6e7quGRBC_dA1Xv-rDOIUK-BXJSmmE1saWphP9ZwGg6LWc32c2ShMWfJ08ngx1ZBnAs9YX9ruADZyti1Eg"/>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-label-md font-label-md">Pediatric</span>
                    <span className="text-on-surface-variant text-body-sm font-body-sm">Sep 15, 2024</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-primary leading-snug hover:text-secondary transition-colors cursor-pointer">Preparing Your Child for Their First Dental Visit</h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">Early dental visits set the tone for a lifetime of oral health. Learn how to make the first appointment a positive, stress-free experience for your little one.</p>
                  <div className="pt-2 flex items-center gap-2 text-on-surface-variant text-body-sm font-body-sm">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">AL</div>
                    <span>Dr. Alan Lee</span>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Pagination (Simple) */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors disabled:opacity-50"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md">1</button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">2</button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors">3</button>
            <button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>

        {/* Sidebar (Right) */}
        <aside className="lg:col-span-4 flex flex-col gap-stack-lg">
          {/* Search */}
          <div className="bg-surface-bright rounded-[24px] p-6 shadow-sm border border-surface-container-high">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full h-12 pl-12 pr-4 bg-surface-container-low border-none rounded-[16px] focus:ring-2 focus:ring-primary focus:bg-white transition-all text-body-md font-body-md placeholder-outline" placeholder="Search articles..." type="text"/>
            </div>
          </div>
          
          {/* Categories */}
          <div className="bg-surface-bright rounded-[24px] p-6 shadow-sm border border-surface-container-high">
            <h4 className="text-headline-md font-headline-md text-primary mb-6 border-b border-surface-container-high pb-4">Categories</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-body-md font-body-md text-on-surface group-hover:text-secondary transition-colors">Clinical Innovations</span>
                  <span className="bg-surface-container text-on-surface-variant text-label-md font-label-md px-2 py-0.5 rounded-full">12</span>
                </a>
              </li>
              <li>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-body-md font-body-md text-on-surface group-hover:text-secondary transition-colors">Oral Hygiene</span>
                  <span className="bg-surface-container text-on-surface-variant text-label-md font-label-md px-2 py-0.5 rounded-full">8</span>
                </a>
              </li>
              <li>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-body-md font-body-md text-on-surface group-hover:text-secondary transition-colors">Orthodontics</span>
                  <span className="bg-surface-container text-on-surface-variant text-label-md font-label-md px-2 py-0.5 rounded-full">5</span>
                </a>
              </li>
              <li>
                <a className="flex items-center justify-between group" href="#">
                  <span className="text-body-md font-body-md text-on-surface group-hover:text-secondary transition-colors">Pediatric Care</span>
                  <span className="bg-surface-container text-on-surface-variant text-label-md font-label-md px-2 py-0.5 rounded-full">7</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
