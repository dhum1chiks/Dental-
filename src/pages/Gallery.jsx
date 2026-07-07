import { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'clinic',
      title: 'Main Reception',
      desc: 'Welcoming patient area',
      aspect: 'aspect-[4/3]',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBysrT3YSIvtH8IMTQvFoadS23zIXqr3y_fRoz5R-icpFgtYcdrD-Jdu5Z_9g3Mb0Wvmp0Nkpy7wcCyqHCnLYQ_NU3h3BCok6mDYqfXokN6MR1aEQjcWrmYmKwTJ4zmCO2ZeBn1FB2b4URXqvTaWZZ4VEXyyd7Z-kaM2yDgOF6PajRZV07ik3UblSXq4Iq_2wxEQgh9IxKftgEvyPrO5jsUUniqE6VJto_-U-LmrDqwY_zok8PcVdS51AvCMVzSS3i2r_kJQmLy3g'
    },
    {
      id: 2,
      category: 'equipment',
      title: '3D Imaging',
      desc: 'State-of-the-art diagnostics',
      aspect: 'aspect-[3/4]',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCu0GP884a0BlCNnQnTMiUwmrHtsjVij1zcfz1cxVjzw4hprWnpAXOol-LtmHUKs5ZulOKblym1CUpDA1nZOpOY0eQpPuBPUqpStBQynGsh9gMu2Y_2KEHVy9Jt-5QBdcQWIRY7N91TnRXXWrComP5YzBc_WJqVUDB6OZD1NwsgzWodidOE0yQEl_i560aZm9kndPqzh1K434fEZGDEcbqrGjRYY8gvMBCw7P0pUhRJDBgxvHht_G_8nrv_8dptia32eNwxJ5BLnQ'
    },
    {
      id: 3,
      category: 'staff',
      title: 'Dr. Sarah Jenkins',
      desc: 'Lead Orthodontist',
      aspect: 'aspect-square',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvQj7svK7KxMFEdJSc9nZO9-SeTYrBqHwpJxlql4l4dGfRAvm_M_9b7UoU3S7zqhaNLXXFaMjNlIFHMqxJw_AVJ_ElbwzZ5KFEWMg98VzKnbp_VJSI7aO76GqVS1LQ5FTTGb4NsMHsULmXDr5vk8ca3aoBErBHqF1DxKUXsjYp3RmmE_P5RtTLHkGSb3PokRj_cjvxA07z7UqVR0zwf9FtrmJ4FN-2ND-PuvU1Ql55owxyx_vV2wHUQnc5eS4at-QNEJmw-tVOaA'
    },
    {
      id: 4,
      category: 'results',
      title: 'Veneers Transformation',
      desc: 'Cosmetic Dentistry',
      aspect: 'aspect-[16/9]',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzCMKqFiCrtXHp3uFtDR-GiwOgtAIqDbsaZyDDyBDq--NvmTvDK1sZAAahLpu37diKNyxYiCtLF_yZ_TSOmiD2b0K367VUo0hkiZSZYZ3BFJp_Ci64DtjV6URFcxSXzTNUgGWZhTAt0-sl9eomtdeMxmCuCu4VV0A7uGh4VCmXcKU-aApM3VHzWkB5ClcQCaaHl4XEMDaSru64_jyKiWbp1vPTxDxn6jdbz2VkAtjpwC46QClXBOk0_lJptoGEvJzJWzqTT39ilA'
    },
    {
      id: 5,
      category: 'clinic',
      title: 'Operatory Suite',
      desc: 'Comfort-focused design',
      aspect: 'aspect-[3/4]',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRMvc8VgFHK-AB6iQr3TzapWK4O3JPjGkWcjbdlOg8mb_UZ9ZocQzszJNJErTSTxeO4fsxDVitMaj2eQMQQ4uvs9mUNzmWlwjkH7RHIPKi4j3_tI6fCQnDueSvEyXSOvqZ8QYqNOUp244o_01o_QHIvvs6o0XErXK4CvkuoUJYYwp0QY5nyP4lLpU9lRDWHsZdrb6Mx7JVSgvQIb5yIWDtWX3wVAZQ_RZWB2LSC9IDieQs1_fl87b8d2rItamesyEkVJmgmKOgPQ'
    },
    {
      id: 6,
      category: 'staff',
      title: 'Expert Team',
      desc: 'Dedicated Professionals',
      aspect: 'aspect-[4/3]',
      imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9GdA_EIGl9CESBNW7DtLkch1heJFpHHe77j3FlLjX8CKDo7ssz12-4MdtQCukOJSGOWwGRcijtUlr_XjGg4mcKz3Fl4MM-c3hyBX17uBk1stYP0UGMZvj0RNdwYe-NVDuG6YaYQV6iDVjEY5lzppNZbCwmS8gGcQC7k5RHfv6xhehm-JBspRVpTOQPbEzg0A_ybnhmKhAQO80MAIFJqWB6K5Sv5ZQH3yjYvFhf9AIp4__AOoEyyXlIIXAtfWrkdq4VCWZJw0rXw'
    }
  ];

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="flex-grow w-full max-w-7xl mx-auto px-container-padding py-stack-lg flex flex-col gap-stack-lg">
      {/* Header Section */}
      <header className="text-center max-w-2xl mx-auto mb-8">
        <h1 className="text-display-lg font-display-lg text-primary mb-4 hidden md:block">Our Clinic Gallery</h1>
        <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary mb-4 md:hidden">Our Clinic Gallery</h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant">Experience the welcoming atmosphere and state-of-the-art technology that defines DentalExpert care.</p>
      </header>
      
      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {['all', 'clinic', 'equipment', 'staff', 'results'].map((f) => (
          <button 
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full border border-outline-variant text-label-md font-label-md transition-all hover:bg-surface-variant/50 capitalize ${filter === f ? 'bg-primary-container text-on-primary-container border-primary-container' : 'text-on-surface-variant'}`}
          >
            {f === 'results' ? 'Before & After' : f}
          </button>
        ))}
      </div>
      
      {/* Gallery Grid (Masonry approach using CSS columns) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map(item => (
          <div key={item.id} className="break-inside-avoid group relative overflow-hidden rounded-[24px] bg-white shadow-[0px_4px_20px_rgba(15,76,129,0.12)] cursor-pointer">
            <div className={`${item.aspect} w-full relative`}>
              <img 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt={item.title} 
                src={item.imgSrc}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100 transform text-4xl">zoom_in</span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-body-md font-body-md font-bold text-primary">{item.title}</h3>
              <p className="text-label-md font-label-md text-on-surface-variant mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
