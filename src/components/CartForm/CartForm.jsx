import s from './CartForm.module.scss';

export const CartForm = () => {
  console.log();
  return (
    <form className={s.form} id='order'>
      <h3 className={s.subtitle}>Данные для доставки</h3>
      <fieldset className={s.fieldsetInput}>
        <input
          className={s.input}
          type='text'
          name='name'
          placeholder='Фамилия Имя Отчество'
        />
        <input
          className={s.input}
          type='text'
          name='phone'
          placeholder='Телефон'
        />
        <input
          className={s.input}
          type='email'
          name='email'
          placeholder='E-mail'
        />
        <input
          className={s.input}
          type='text'
          name='address'
          placeholder='Адрес доставки'
        />
        <textarea
          className={s.textarea}
          name='comments'
          placeholder='Комментарий к заказу'></textarea>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            name='deliveryType'
            value='delivery'
            required
          />
          Доставка
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            name='deliveryType'
            value='pickup'
            required
          />
          Самовывоз
        </label>
      </fieldset>

      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            name='paymentType'
            value='card'
            required
          />
          Картой при получении
        </label>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type='radio'
            name='paymentType'
            value='cash'
            required
          />
          Наличными при получении
        </label>
      </fieldset>
    </form>
  );
};
