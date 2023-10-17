import React from "react";
import './CoursePremiumDetails.scss';

export const CoursePremiumDetails = ({active}) => {
  return (
    <div className="details-description">
      {active.homework && (
        <div className="details-description__homework">
          <div className="details-description__homework-title">
            Домашнее задание:
          </div>
          <ol>
            {active.homework.map((item, i) => (
              <li key={i} className="details-description__homework-text">
                {item.text}
              </li>
            ))}
          </ol>
        </div>
      )}

      {active.links && (
        <div className='details-description__links'>
          {active.links.map((item, i) => (
            <div key={i} className='details-description__links-item'>
              <span>{item.label}</span>
              <a href={item.link} target='_blank' rel="noreferrer">{item.linkName}</a>
            </div>
          ))}
        </div>
      )}

      {active.examples && (
        <div>
          <div className="details-description__homework-title">
            Примеры сделок по пройденным темам:
          </div>
          <ul>
            {active.examples.map((item, i) => (
              <li key={i} className="details-description__homework-text">
                <a href={item.link} target='_blank' rel="noreferrer">{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul className="details-description__list">
        {active.list.map((theme, i) =>
          <li key={i}>{theme.title}</li>
        )}
      </ul>
    </div>
  )
}