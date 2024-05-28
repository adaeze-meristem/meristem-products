import React from 'react';
import { ProductCards } from '../../components';

const productsData = [
  {
    title: 'Meritrade',
    bgColor: '#D4F0E4',
    color: '#28B67A',
    value: 'https://www.meritrade.com/',
  },
  {
    title: 'Account Opening Form',
    bgColor: '#E2EDE6',
    color: '#154D34',
    value: 'https://forms.meristemng.com/fixtip/',
  },

  {
    title: 'Trust Questionnaire',
    bgColor: '#DCE9F5',
    color: '#5091CD',
    value: 'https://forms.meristemng.com/trustquestionnaire/',
  },
  {
    title: 'Wealthbuddy',
    bgColor: '#B9F55633',
    color: '#EDA141',
    value: 'https://www.wealthbuddy.ng/',
  },
  {
    title: 'Meristem Orientation For Rising Entrepreneurship (MORE)',
    bgColor: '#FBE8EB',
    color: '#DA1A32',
    value: 'https://more.meristemng.com/',
  },
];
const Home = () => {
  return (
    <section className="max-w-[1440px] mx-auto pt-24 md:pt-32">
      <h1 className="font-bold md:text-4xl uppercase my-8 text-center">
        Our Products
      </h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center mb-16">
        {productsData.map((prod, index) => (
          <ProductCards {...prod} key={index} />
        ))}
      </div>
    </section>
  );
};

export { Home };
