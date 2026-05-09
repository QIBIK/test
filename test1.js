function getData() {
  let temp = 42;               // ← Ошибка: переменная не используется
  let user = "admin";
  if (user = "guest") {        // ← Ошибка: присваивание вместо сравнения
    console.log("Guest access");
  }
}