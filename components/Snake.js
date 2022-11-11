import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Snake = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    startGame();
  };
  //board
  var blockSize = 25; //each square size in pixel
  var rows = 20;
  var cols = 20;
  var board;
  var context;

  //snake position
  var snakeX = blockSize * 5;
  var snakeY = blockSize * 5;

  var velocityX = 0;
  var velocityY = 0;

  //snake body
  var snakeBody = [];

  //food position
  var foodX;
  var foodY;

  var gameOver = false;

  const startGame = () => {
    board = document.getElementById("board");

    board.height = blockSize * rows;
    board.width = blockSize * cols;
    context = board.getContext("2d");
    placeFood();

    document.addEventListener("keyup", changeDirection);

    setInterval(update, 1000 / 10); //call every 100 ms
  };

  const update = () => {
    if (gameOver) {
      return;
    }

    //Initialize board
    context.fillStyle = "black";
    context.fillRect(0, 0, board.width, board.height);

    //Initialize food
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // check if snake eats the food
    if (snakeX === foodX && snakeY === foodY) {
      snakeBody.push([foodX, foodY]);
      placeFood();
    }

    //to correctly update snake growth and position
    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i] = snakeBody[i - 1];
    }

    //to update snakebody to go in right direction
    if (snakeBody.length) {
      snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle = "green";
    // to update position
    snakeX += velocityX * (blockSize / 2);
    snakeY += velocityY * (blockSize / 2);

    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    //grow snake after eating food
    for (let i = 0; i < snakeBody.length; i++) {
      context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //gameover conditions

    //condition 1: if collides on wall
    if (
      snakeX < 0 ||
      snakeX > cols * blockSize - 1 ||
      snakeY < 0 ||
      snakeY > rows * blockSize - 1
    ) {
      gameOver = true;
      alert("Game over!!");
    }
    //condition 2: collide with yourself
    for (let i = 0; i < snakeBody.length; i++) {
      if (snakeX === snakeBody[i][0] && snakeY === snakeBody[i][1]) {
        gameOver = true;
        alert("Game over!!");
      }
    }
  };

  const changeDirection = (e) => {
    //velocity check is to make sure snake cant move in opposite direction
    if (e.code === "ArrowUp" && velocityY !== 1) {
      velocityX = 0;
      velocityY = -1;
    } else if (e.code === "ArrowDown" && velocityY !== -1) {
      velocityX = 0;
      velocityY = 1;
    } else if (e.code === "ArrowLeft" && velocityX !== 1) {
      velocityX = -1;
      velocityY = 0;
    } else if (e.code === "ArrowRight" && velocityX !== -1) {
      velocityX = 1;
      velocityY = 0;
    }
  };

  const placeFood = () => {
    foodX = Math.floor(Math.random() * rows) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Start
      </Button>
      {/* <Modal contentClassName="modal-custom" show={show} onHide={handleClose}> */}
      <div className="my-2">
        <canvas id="board"></canvas>
      </div>
      {/* </Modal> */}
    </div>
  );
};

export default Snake;
