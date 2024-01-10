import { Container } from '../Container/Container';
import s from './Order.module.scss';

export const Order = () => (
  <section className={s.order}>
    <Container className={s.container}>
      <div className={s.content}>
        <div className={s.header}>
          <h2 className={s.title}>Заказ успешно размещен</h2>
          <p className={s.price}>20 000 ₽</p>
        </div>

        <div className={s.orderNumber}>№43435</div>
        <div className={s.table_wrapper}>
          <h3 className={s.table_title}>Данные доставки</h3>
          <table className={s.table}>
            <tbody>
              <tr className={s.table_row}>
                <td className={s.table_field}>Получатель</td>
                <td className={s.table_value}>Иванов Петр Александрович</td>
              </tr>
              <tr className={s.table_row}>
                <td className={s.table_field}>Телефон</td>
                <td className={s.table_value}>+7 (737) 346 23 00</td>
              </tr>
              <tr className={s.table_row}>
                <td className={s.table_field}>E-mail</td>
                <td className={s.table_value}>Ivanov84@gmail.com</td>
              </tr>
              <tr className={s.table_row}>
                <td className={s.table_field}>Адрес доставки</td>
                <td className={s.table_value}>
                  Москва, ул. Ленина, 21, кв. 33
                </td>
              </tr>
              <tr className={s.table_row}>
                <td className={s.table_field}>Способ оплаты</td>
                <td className={s.table_value}>Картой при получении</td>
              </tr>
              <tr className={s.table_row}>
                <td className={s.table_field}>Способ получения</td>
                <td className={s.table_value}>Доставка</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a className={s.back} href='/'>
          На главную
        </a>
      </div>
    </Container>
  </section>
);
