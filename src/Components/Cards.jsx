import React from 'react'

const Cards = () => {
    const cards = [
        {
          title: 'Years Experience',
          value: '15+',
          image: 'https://www.kuchoriyatechsoft.com/images/years-experience-icon.png'
        },
        {
            title: 'Talented Squads',
            value: '230+',
            image: 'https://www.kuchoriyatechsoft.com/images/talented-squads-icon.png'
          }, 

          {
            title: ' Apps Developed',
            value: '400+',
            image: 'https://www.kuchoriyatechsoft.com/images/apps-developed-icon.png'
          }, 

          {
            title: 'Projects Delivered',
            value: '700+',
            image: 'https://www.kuchoriyatechsoft.com/images/projects-delivered-icon.png'
          },
          {
            title: 'Countries Sereved',
            value: '50+',
            image: 'https://www.kuchoriyatechsoft.com/images/countries-sereved-icon.png'
          },
          {
            title: 'Client Satisfaction',
            value: '300+',
            image: 'https://www.kuchoriyatechsoft.com/images/client-satisfaction-icon.png'
          }, 
      ];
  return (
    <div className="flex flex-wrap justify-center mt-20 gap-6">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-gradient-to-r from-zinc-200 to-zinc-300 rounded-lg border-2 border-zinc-300 shadow-lg p-6 text-center w-full md:w-44 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l hover:from-zinc-300 hover:to-zinc-400"
    >
      <div className="flex flex-col gap-5 items-center justify-center mb-4">
        {card.image && (
          <img
            src={card.image}
            alt={card.title}
            className="w-10 h-10"
          />
        )}
        <span className="text-3xl font-semibold text-orange-500">{card.value}</span>
      </div>
      <h3 className="text-lg font-medium text-gray-700">{card.title}</h3>
    </div>
  ))}
</div>

  )
}

export default Cards