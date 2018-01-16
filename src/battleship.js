//контроллер - связывает получение данных от польз и выполнение логики

//модель - следит за состоянием игры, за позициями кораблей, счетчиком попаданий, изменениями состояния, взаимодействует с представлением
let model={
    boardSize: 7,
    numShips: 3,
    shipsSunk: 0,
    shipLength: 3,
    ships = [
        { location:["10", "20", "30"], hits:["hit","",""] },
        { location:["32", "33", "34"], hits:["","",""] },
        { location:["63", "64", "65"], hits:["","",""] }
    ],
    fire: function(guess){ //получает координаты выстрела
        for (let i = 0; i < this.numShips; i++){ //перебираем массив кораблей
            let ship = this.ships[i]; //получаем объект корабля. Проверяем совпадают ли координаты выстрела с занимаемой позицией
            locations = ship.locations; //получаем массив клеток, занимаемых кораблем
        }
    }
};
//представление - обновляет изображение маркерами попаданий и промахов, сообщениями для пользователя
let view={
    displayMessage:function(msg){ //выводит сообщение
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit:function(location){
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit")
    },
    displayMiss:function(location){
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss")
    }
}


