* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: black;
  color: white;
  font-family: 'Quicksand', sans-serif;
  overflow: hidden;
}

.scene {
  position: fixed;
  inset: 0;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.scene.active {
  display: flex;
}

h1, h2 {
  font-family: 'Pacifico', cursive;
  margin-bottom: 20px;
}

button {
  padding: 15px 35px;
  font-size: 18px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background: pink;
  color: black;
  margin: 10px;
  transition: transform 0.3s;
}

#yesBtn {
  background: hotpink;
}

#gallery {
  justify-content: flex-end;
}

#images img {
  width: 200px;
  margin: 10px auto;
  animation: slideUp 1s ease forwards;
}

@keyframes slideUp {
  from {
    transform: translateY(100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

video {
  width: 80%;
}

#final h1 {
  font-size: 48px;
}
