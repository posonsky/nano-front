class Api {
  constructor({ address, token, groupId }) {
    // стандартная реализация -- объект options
    this._token = token;
    this._groupId = groupId;
    this._address = address;

    // Запросы в примере работы выполняются к старому Api, в новом URL изменены.
  }

  async getCardList() {
    return await fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  async addCard({ name, link }) {
    return await fetch(`${this._address}/${this._groupId}/cards`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  async removeCard(cardID) {
    return await fetch(`${this._address}/${this._groupId}/cards/${cardID}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }

  async changeLikeCardStatus(cardID, like) {
    // Обычная реализация: 2 разных метода для удаления и постановки лайка.
    return await fetch(
      `${this._address}/${this._groupId}/cards/like/${cardID}`,
      {
        method: like ? "PUT" : "DELETE",
        headers: {
          authorization: this._token,
          "Content-Type": "application/json",
        },
      },
    ).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`),
    );
  }
}

const api = new Api({
  address: "https://nomoreparties.co",
  groupId: `cohort0`,
  token: `80a75492-21c5-4330-a02f-308029e94b63`,
});

export default api;
