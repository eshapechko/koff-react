import s from './CartProducts.module.scss';

export const CartProducts = () => {
  console.log();
  return (
    <ul className={s.products}>
      <li className={s.product}>
        <img
          className={s.img}
          src='https://koff-api.vercel.app/img//1hb1mfsqd42m1052.jpg'
          alt='sdsds'
        />
        <h3 className={s.titleProduct}>Кресло с подлокотниками</h3>
        <p className={s.price}>{'133741'.toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 84348945757</p>

        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>3</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
      <li className={s.product}>
        <img
          className={s.img}
          src='https://koff-api.vercel.app/img//1hb1mfsqd42m1052.jpg'
          alt='sdsds'
        />
        <h3 className={s.titleProduct}>Кресло с подлокотниками</h3>
        <p className={s.price}>{'133742'.toLocaleString()}&nbsp;₽</p>
        <p className={s.article}>арт. 84348945757</p>

        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>3</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
      <li className={s.product}>
        <img
          className={s.img}
          src='https://koff-api.vercel.app/img//1hb1mfsqd42m1052.jpg'
          alt='sdsds'
        />
        <h3 className={s.titleProduct}>Кресло с подлокотниками</h3>
        <p className={s.price}>133 742&nbsp;₽</p>
        <p className={s.article}>арт. 84348945757</p>

        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>3</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};
