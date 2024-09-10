import React from 'react';

const ProfileCard = ({ imageUrl, name, title, organization, text, alignTop, overlap }) => {
  return (
    <div
      className={`relative flex flex-col ${alignTop ? 'md:flex-row' : 'md:flex-row-reverse'} bg-transparent rounded-lg overflow-visible w-[900px] py-[190px] my-16 ${
        overlap ? '-mt-[350px]' : ''
      }`} 
    >
      {/* Image Section */}
      <div className="md:w-[400px] w-full flex justify-center items-center bg-gray-100 relative h-64 md:h-auto">
        <img src={imageUrl} alt={`${name}`} className="w-full h-full object-cover" />
      </div>

      {/* Text Section */}
      <div className={`md:w-1/2 w-full flex ${alignTop ? 'items-start' : 'items-end'} text-white`}>
        <div
          className="flex flex-col bg-red-500 relative p-6"
        //   style={{ height: alignTop ? 'auto' : 'calc(100% - 100px)', top: alignTop ? '0' : 'auto' }}
        >
          <p className="text-sm">{text}</p>
          <div className="mt-4">
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-sm">{title}</p>
            <p className="text-sm">{organization}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Rough = () => {
  const profiles = [
    {
      imageUrl: 'https://pantiss.com/wp-content/uploads/2022/08/adv1-e1661441336280.png',
      name: 'Prof. Dr. Bhupendra Panda',
      title: 'Additional Professor, PMU',
      organization: 'Ministry of Health & Public Welfare, GOI',
      text: 'We believe that through social impact consulting and effective social impact management...',
      alignTop: true,
      overlap: false, // No overlap for the first card
    },
    {
      imageUrl: 'https://pantiss.com/wp-content/uploads/2022/08/adv2-e1661441239680.png',
      name: 'Prof. Dr. Bhupendra Panda',
      title: 'Additional Professor, PMU',
      organization: 'Ministry of Health & Public Welfare, GOI',
      text: 'We believe that through social impact consulting and effective social impact management...',
      alignTop: false,
      overlap: true, // Overlap for the second card
    },
    {
      imageUrl: 'https://pantiss.com/wp-content/uploads/2022/12/Brajakishore-Nayak-e1670427621163.jpeg',
      name: 'Prof. Dr. Bhupendra Panda',
      title: 'Additional Professor, PMU',
      organization: 'Ministry of Health & Public Welfare, GOI',
      text: 'We believe that through social impact consulting and effective social impact management...',
      alignTop: true,
      overlap: true, // Overlap for the third card
    },
    {
      imageUrl: 'https://pantiss.com/wp-content/uploads/2022/09/PIC-8.png',
      name: 'Prof. Dr. Bhupendra Panda',
      title: 'Additional Professor, PMU',
      organization: 'Ministry of Health & Public Welfare, GOI',
      text: 'We believe that through social impact consulting and effective social impact management...',
      alignTop: false,
      overlap: true, // Overlap for the fourth card
    },
  ];

  return (
    <div className="container flex justify-center items-center flex-col mx-auto px-4 pb-8 -mt-16">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          imageUrl={profile.imageUrl}
          name={profile.name}
          title={profile.title}
          organization={profile.organization}
          text={profile.text}
          alignTop={profile.alignTop}
          overlap={profile.overlap} // Pass overlap status to the card
        />
      ))}
    </div>
  );
};

export default Rough;
