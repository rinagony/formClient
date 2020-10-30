<template>
  <div id="form">
    <div class="container">
      <div v-show="ifNotSubmit" class="messageFalse" ref="ifNotSubmit">
        Вы не заполнили необходимые поля!
        <a href="#" @click="closeWin" id="close">×</a>
      </div>
      <div v-show="ifSubmit" class="messageTrue" ref="ifSubmit">
        Вы успешно зарегистрированы
      </div>
      <form @submit.prevent="submitHandler">
        <ul class="formMain">
          <div class="wrpAllInfo">
            <div class="wrpMainInfo">
              <li>
                <h2 id="adderessTitle">Главная</h2>
                <label>Ваше имя <span class="required">*</span></label>
                <input
                  v-model.trim="$v.name.$model"
                  type="text"
                  name="field1"
                  class="field-divided"
                  placeholder="Имя"
                />
                <small
                  v-if="$v.name.$dirty && !$v.name.required"
                  class="helper-text invalid"
                >
                  Введите имя
                </small>
              </li>
              <li>
                <label>Ваша фамилия <span class="required">*</span></label>
                <input
                  type="text"
                  name="field2"
                  class="field-divided"
                  placeholder="Фамилия"
                  v-model.trim="$v.lastName.$model"
                />
                <small
                  v-if="$v.lastName.$dirty && !$v.lastName.required"
                  class="helper-text invalid"
                >
                  Введите фамилию
                </small>
              </li>
              <li>
                <label>Ваше отчество</label>
                <input
                  type="text"
                  v-model.trim="$v.middleName.$model"
                  name="field3"
                  class="field-divided"
                  placeholder="Отчество"
                />
              </li>
              <li>
                <label for="field3"
                  >Дата рождения <span class="required">*</span></label
                >
                <input
                  v-model="$v.birthday.$model"
                  type="date"
                  name="field3"
                  class="field-long"
                />
                <small
                  v-if="$v.birthday.$dirty && !$v.birthday.required"
                  class="helper-text invalid"
                >
                  Введите дату
                </small>
              </li>
              <li>
                <label>Номер телефона <span class="required">*</span></label>
                <input
                  v-model="$v.phone.$model"
                  value="<?=(isset($_POST['phone'])?$_POST['phone']:'+7(___)___-__-__')?>"
                  type="tel"
                  autocomplete="tel"
                  name="field5"
                  pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                  class="field-long"
                  placeholder="+7(___)___-__-__"
                />
                <small
                  v-if="$v.phone.$dirty && !$v.phone.required"
                  class="helper-text invalid"
                >
                  Введите номер телефона
                </small>
                <small
                  v-else-if="$v.phone.$dirty && !$v.phone.minLength"
                  class="helper-text invalid"
                >
                  Номер должен быть 11 символов, начиная с +7. Сейчас он
                  {{ phone.length }}
                </small>
              </li>
              <li></li>
              <li>
                <label>Пол:</label>
                <div class="sexWrp">
                  <input
                    v-model.trim="$v.sex.$model"
                    type="radio"
                    id="female"
                    name="field6"
                    value="Женский"
                    checked
                  />
                  <label for="field6">Женский</label>
                </div>
                <div class="sexWrp">
                  <input
                    v-model.trim="$v.sex.$model"
                    type="radio"
                    id="male"
                    name="field7"
                    value="Мужской"
                  />
                  <label for="field7">Мужской</label>
                </div>
              </li>
              <li>
                <label>Группа клиентов: <span class="required">*</span></label>
                <select
                  v-model="$v.groupClients.$model"
                  multiple
                  name="field8"
                  class="field-select"
                >
                  <option value="VIP">VIP</option>
                  <option value="Проблемные">Проблемные</option>
                  <option value="ОМС">ОМС</option>
                </select>
                <small
                  v-if="$v.groupClients.$dirty && !$v.groupClients.required"
                  class="helper-text invalid"
                >
                  Выберите
                </small>
              </li>
              <li>
                <label>Лечащий врач:</label>
                <select
                  v-model.trim="$v.doctor.$model"
                  name="field9"
                  class="field-select"
                >
                  <option value="Иванов">Иванов</option>
                  <option value="Захаров">Захаров</option>
                  <option value="Чернышева">Чернышева</option>
                </select>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="field10"
                  value="Не отправлять СМС"
                  v-model="checkbox"
                />
                <label id="checkboxSms" for="field10">Не отправлять СМС</label>
              </li>
            </div>

            <div class="wrpAddressPassport">
              <li>
                <h2 id="adderessTitle">Адрес</h2>
                <br />
                <input
                  v-model.trim="$v.index.$model"
                  name="field11"
                  class="field-divided"
                  type="number"
                  placeholder="Индекс"
                />
              </li>
              <li>
                <input
                  v-model.trim="$v.contry.$model"
                  name="field12"
                  class="field-divided"
                  type="text"
                  placeholder="Страна"
                />
              </li>
              <li>
                <input
                  v-model.trim="$v.oblast.$model"
                  name="field13"
                  class="field-divided"
                  type="text"
                  placeholder="Область"
                />
              </li>
              <li>
                <input
                  class="field-divided"
                  name="field14"
                  v-model="$v.city.$model"
                  type="text"
                  placeholder="Город"
                />
                <span class="required">*</span>
                <small
                  v-if="$v.city.$dirty && !$v.city.required"
                  class="helper-text invalid"
                >
                  Введите город
                </small>
              </li>
              <li>
                <input
                  name="field15"
                  v-model.trim="$v.street.$model"
                  class="field-divided"
                  type="text"
                  placeholder="Улица"
                />
              </li>
              <li>
                <input
                  name="field16"
                  v-model.trim="$v.houseNumber.$model"
                  class="field-divided"
                  type="number"
                  placeholder="Дом"
                />
              </li>
              <li>
                <h2 id="adderessTitle">Паспорт</h2>
                <label>Тип документа:</label>
                <select
                  v-model.trim="$v.typeDocument.$model"
                  name="field17"
                  class="field-divided"
                >
                  <option value="Паспорт">Паспорт</option>
                  <option value="Свидетельство о рождении">
                    Свидетельство о рождении
                  </option>
                  <option value="Вод. удостоверение">Вод. удостоверение</option>
                </select>
              </li>
              <li>
                <input
                  v-model.trim="$v.pasportSeria.$model"
                  class="field-divided"
                  type="number"
                  name="field18"
                  placeholder="Серия паспорта"
                />
              </li>
              <li>
                <input
                  v-model.trim="$v.pasportNumber.$model"
                  class="field-divided"
                  type="number"
                  name="field19"
                  placeholder="Номер паспорта"
                />
              </li>
              <li>
                <input
                  v-model.trim="$v.pasportWhoGive.$model"
                  class="field-divided"
                  type="text"
                  name="field20"
                  placeholder="Кем выдан"
                />
              </li>
              <li>
                <label for="field21"
                  >Дата выдачи:<span class="required">*</span></label
                >
                <input
                  v-model="$v.pasportWhen.$model"
                  type="date"
                  name="field21"
                  class="field-divided"
                />
                <small
                  v-if="$v.pasportWhen.$dirty && !$v.pasportWhen.required"
                  class="helper-text invalid"
                >
                  Введите дату
                </small>
              </li>
            </div>
          </div>
          <div class="wrpBtn">
            <button class="submit" type="submit">Отправить</button>
          </div>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  name: "Form",
  components: {},
  data: () => {
    return {
      ifSubmit: false,
      ifNotSubmit: false,
      lastName: "",
      name: "",
      middleName: "",
      birthday: "",
      phone: "",
      sex: "",
      groupClients: [],
      doctor: "",
      checkbox: [],
      index: "",
      contry: "",
      oblast: "",
      city: "",
      street: "",
      houseNumber: "",
      typeDocument: "",
      pasportSeria: "",
      pasportNumber: "",
      pasportWhoGive: "",
      pasportWhen: "",
    };
  },
  validations: {
    lastName: { required },
    name: { required },
    middleName: {},
    birthday: { required },
    phone: { required, minLength: minLength(11), maxLength: maxLength(11) },
    sex: { required },
    groupClients: { required },
    doctor: { required },
    city: { required },
    checkbox: { required },
    index: { required },
    contry: { required },
    oblast: { required },
    street: { required },
    houseNumber: { required },
    typeDocument: { required },
    pasportSeria: { required },
    pasportNumber: { required },
    pasportWhoGive: { required },
    pasportWhen: { required },
  },
  methods: {
    async submitHandler() {
      if (
        this.lastName.length &&
        this.name.length &&
        this.birthday.length &&
        this.phone.length &&
        this.groupClients.length &&
        this.city.length &&
        this.pasportWhen.length
      ) {
        this.$refs.ifSubmit.style = "display: block";
        console.log(this.typeDocument);
        const formData = {
          lastName: this.lastName,
          name: this.name,
          middleName: this.middleName,
          birthday: this.birthday,
          phone: this.phone,
          sex: this.sex,
          groupClients: this.groupClients,
          doctor: this.doctor,
          checkbox: this.checkbox,
          city: this.city,
          index: this.index,
          contry: this.contry,
          oblast: this.oblast,
          street: this.street,
          houseNumber: this.houseNumber,
          typeDocument: this.typeDocument,
          pasportSeria: this.pasportSeria,
          pasportNumber: this.pasportNumber,
          pasportWhoGive: this.pasportWhoGive,
          pasportWhen: this.pasportWhen,
        };
        console.log(formData);
        await this.$store.dispatch("createClient", formData); //видимость отправки массива с данными нового клиента в стор
      } else {
        this.$refs.ifNotSubmit.style = "display: block";
        setTimeout(function () {
          this.$refs.ifNotSubmit.style = "display: none";
        }, 1000);
      }
    },
    closeWin() {
      this.$refs.ifNotSubmit.style = "display: none";
    },
  },
};
</script>

<style scoped lang="scss">

.form {
	padding-bottom: 40px;
}
h2 {
  display: inline-block;
  background: #35a76e;
  padding: 0.4rem;
  color: #fff;
  border-radius: 4px;
}

small {
  color: red;
}

.messageTrue {
  background: green;
  padding: 1rem;
  position: fixed;
  color: white;
  opacity: 0.7;
  border-radius: 5px;
}

.messageFalse {
  background: red;
  padding: 1rem;
  position: fixed;
  color: white;
  opacity: 0.7;
  border-radius: 5px;

  a {
    color: white;
    font-size: 25px;
  }
}

.isInvalid {
  opacity: 0;
}
@import "@/assets/styles/variable.scss";
.sexWrp {
  display: inline;
  label {
    display: inline !important;
  }
}

#checkboxSms {
  display: inline;
}

.formMain {
  margin: 10px auto;
  padding: 7px 12px 10px 20px;
  font-size: 13px;

  li {
    padding: 0;
    display: block;
    list-style: none;
    margin-top: 1.1rem;
  }
  label {
    margin: 0 0 3px 0;
    padding: 0px;
    display: block;
    font-weight: bold;
  }

  .field-divided {
    display: inline-block;
    margin: 0 auto;
    margin-right: 0.7rem;
    @include for-tablet-portrait-up {
      margin-right: 0;
    }
  }

  .field-divided.text:focus {
    border: 1px solid green !important;
    border-top: 1px solid green !important;
  }
  .field-long,
  .field-divided,
  .field-select {
    border-right: 0;
    border-left: 0;
    border-top: 0;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    width: 80%;
  }

  .field-long {
    width: 80%;
  }

  .field-select {
    width: 80%;
  }

  .field-textarea {
    width: 80%;
  }

  input[type="submit"],
  input[type="button"] {
    background: #4b99ad;
    padding: 8px 15px 8px 15px;
    border: none;
    color: #fff;
  }

  input[type="submit"]:hover,
  input[type="button"]:hover {
    background: #4691a4;
    box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
  }

  .required {
    color: red;
  }
  .invalid-feedback {
    color: red;
    font-size: 10px;
  }
}

#close {
  position: absolute;
  right: 0.1rem;
  top: -5px;
  text-decoration: none;
}

.address {
  width: 80%;
  @include for-medium-up {
    width: 100%;
  }
  border-bottom: 1px solid #000;
  padding: 7px;
  border-right: 0;
  border-left: 0;
  border-top: 0;
  margin-right: 0.5rem;
}

#adderessTitle {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.submit {
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: 0.8rem 2rem;
  border-radius: 3px;
  background: rgb(64, 199, 129);
  box-shadow: 0 -3px rgb(53, 167, 110) inset;
  transition: 0.2s;
  outline: none;
  border: 1px solid #21935a;
  &:hover {
    background: rgb(53, 167, 110);
  }
  &:active {
    background: rgb(33, 147, 90);
    box-shadow: 0 3px rgb(33, 147, 90) inset;
    border: none;
  }
  &:focus {
    border: 1px solid #21935a;
  }
}

.wrpAllInfo {
  @include for-tablet-portrait-up {
    display: flex;
    justify-content: space-evenly;
  }
}

.wrpMainInfo,
.wrpAddressPassport {
  width: 90%;
  margin: 0 auto;
}

.wrpBtn {
	margin-top: 20px;
	margin-left: 1rem;
	@include for-tablet-portrait-up {
		margin-top: -40px;
		margin-left: 0;
	}
	
}
</style>