import React from 'react';
import { useState } from 'react';
import AdobeStock from '../../assets/AdobeStock.png';
import CardList from '../CardList/CardList';

import '../../SCSS/TripsList.scss';

function TripsList() {
  const [state, setState] = useState({
    matches: window.matchMedia('(min-width: 1070px)').matches,
    cardsData: [
      {
        id: 1,
        cost: { price: 900, priceOnPier: 1200, selaryOnPier: true },
        imgUrl: AdobeStock,
        cardTitle:
          'Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
        actions: {
          ticketTimeTo: 'Билет на целый день',
          ridesCount: 'Неограниченное число катаний',
          stopsCount: '6 остановок у главных достопримечательностей',
        },
        timeListIsOpen: false,
        timeList: [
          { id: 1, time: '10:00' },
          { id: 2, time: '12:00' },
          { id: 3, time: '14:00' },
        ],
        stock: { stockIsActive: true, stockName: 'Новинка' },
        tripTimes: '2 часа',
      },
      {
        id: 2,
        cost: { price: 900, priceOnPier: 1200, selaryOnPier: false },
        imgUrl: AdobeStock,
        cardTitle:
          'Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
        actions: {
          ticketTimeTo: 'Билет на целый день',
          ridesCount: 'Неограниченное число катаний',
          stopsCount: '6 остановок у главных достопримечательностей',
        },
        timeListIsOpen: false,
        timeList: [
          { id: 1, time: '10:00' },
          { id: 2, time: '12:00' },
          { id: 3, time: '14:00' },
          { id: 4, time: '16:00' },
        ],
        stockIsActive: true,
        stock: { stockIsActive: false, stockName: 'НОВИНКА' },
        tripTimes: '2 часа',
      },
      {
        id: 3,
        cost: { price: 900, priceOnPier: 1200, selaryOnPier: false },
        imgUrl: AdobeStock,
        cardTitle:
          'Обзорная экскурсия по рекам и каналам  с остановками Hop on Hop Off 2019',
        actions: {
          ticketTimeTo: 'Билет на целый день',
          ridesCount: 'Неограниченное число катаний',
          stopsCount: '6 остановок у главных достопримечательностей',
        },
        timeListIsOpen: false,
        timeList: [
          { id: 1, time: '10:00' },
          { id: 2, time: '12:00' },
          { id: 3, time: '14:00' },
          { id: 4, time: '16:00' },
          { id: 5, time: '18:00' },
        ],
        stockIsActive: true,
        stock: { stockIsActive: true, stockName: 'Новинка' },
        tripTimes: '2 часа',
      },
    ],
  });

  return (
    <div className="trip-list">
      <div className="trip-list__wrapper">
        <CardList cardList={state.cardsData} matches={state.matches} />
      </div>
    </div>
  );
}

export default TripsList;
