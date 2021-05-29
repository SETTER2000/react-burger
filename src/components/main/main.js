import React from 'react';
import mainSt from './main.module.css';

class Main extends React.Component {
  render() {
    const { image, caption, title, description } = this.props.mainData;
    return (
      <main className={mainSt.main}>
        {/*<img className={mainStyles.image} src={image} alt="фото собачек." />*/}
        {/*<span className={mainSt.caption}>{caption}</span>*/}
        <h1 className={mainSt.title}>Соберите бургер</h1>
        {/*<p className={mainSt.description}>{description}</p>*/}
      </main>
    );
  }
}

export default Main;
