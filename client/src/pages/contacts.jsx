const Contacts = () => {
  return (
    <>
      <main>
        <section className="contacts section">
          <div className="container !mt-24">
            <div className="contacts_header section_header">
              <h2 className="contacts_header-title section_header-title !mb-4" data-aos="fade-right">
                Забронируйте прямо сейчас
              </h2>
              <span
                className="contacts_header-subtitle section_header-subtitle"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Контакты
              </span>
            </div>
            <div className="contacts_main d-flex flex-column flex-lg-row justify-content-between">
              <ul className="contacts_main-data">
                <li className="contacts_main-data_item">
                  <h3 className="title">Электронная почта</h3>
                  <a className="data link link--underline">
                    barbercrop@gmail.com
                  </a>
                </li>
                <li className="contacts_main-data_item">
                  <h3 className="title">Адрес</h3>
                  <span className="data">
                  просп. Кадырова, 34, Грозный,{' '}
                    <span className="linebreak">Чеченская Республика 364061</span>
                  </span>
                </li>
                <li className="contacts_main-data_item contacts_main-data_item--tel">
                  <h3 className="title">Телефон</h3>
                  <div className="wrapper d-flex flex-column flex-md-row">
                    <a className="data link link--underline" href="tel:+79640009595">
                      +7 964 000 95 95
                    </a>
                    <a className="data link link--underline !ml-3" href="tel:+79650009596">
                      +7 965 000 95 96
                    </a>
                  </div>
                </li>
              </ul>
              <form
                className="contacts_main-form d-flex flex-column flex-md-row flex-wrap justify-content-between col-lg-8"
                action="#"
                method="post"
                data-type="feedback"
                autoComplete="off"
              >
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsName">
                    Полное имя*
                  </label>
                  <input
                    className="field field--corner required"
                    type="text"
                    id="contactsName"
                    name="contactsName"
                    placeholder="тут"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsService">
                  Выберите услугу *
                  </label>
                  <div className="field-wrapper_block my-2">
                    <select name="contactsService" className="p-2 rounded" id="contactsService">
                      <option value="haircut">Стрижка волос</option>
                      <option value="trim">Стрижка бороды</option>
                      <option value="stacking">Укладка</option>
                      <option value="shave">Бритье</option>
                      <option value="mustache">Усы</option>
                    </select>
                  </div>
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsTel">
                    Ваш номер телефона *
                  </label>
                  <input
                    className="field field--corner required"
                    data-type="tel"
                    type="text"
                    name="contactsTel"
                    id="contactsTel"
                    placeholder="номер телефона"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsDate">
                    Выберите дату встречи
                  </label>
                  <input
                    className="field field--corner optional"
                    data-type="date"
                    type="text"
                    id="contactsDate"
                    name="contactsDate"
                    placeholder="день/месяц/год"
                  />
                </div>
                <div className="form-block">
                  <label className="contacts_main-form_label" htmlFor="contactsMessage">
                    Сообщение
                  </label>
                  <textarea
                    className="field field--corner optional"
                    id="contactsMessage"
                    name="contactsMessage"
                    placeholder="ваш текст здесь"
                    data-type="message"
                  ></textarea>
                </div>
                <button className="btn theme-element" type="submit">
                  Забронировать
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font relative mb-8">
        <div className="inset-0 bg-gray-300">
          <iframe className="h-80" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11612.818844848507!2d45.7006208!3d43.3099739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3111ec2dc449ec4!2sEddy.%20Cuts!5e0!3m2!1sru!2sru!4v1658919265515!5m2!1sru!2sru;output=embed" style={{filter: `grayscale(1) contrast(1.2) opacity(0.4)`}} />
        </div>
      </section>
      </main>
    </>
  );
};

export default Contacts;
