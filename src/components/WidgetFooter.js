import React from 'react';


function WidgetFooter() {
  return (
    <div className="widget-footer">
      <div className="widget-footer-slider">
        <button className="widget-footer-slider__item">Book an appointment</button>
        {/* <button className="widget-footer-slider__item">View hairstylists</button> */}
        <button className="widget-footer-slider__item">View gallery</button>
      </div>
      <form className="widget-footer__form" action="#">
        <button className="widget-footer__btn btn__paperclip">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" widget="20px" height="20px">
            <path
              fill="#dadae1"
              d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"></path>
          </svg>
        </button>
        <button className="widget-footer__btn btn__smile">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 32 33">
            <path
              fill="#dadae1"
              d="M 16 0.515625 C 7.160156 0.515625 0 7.671875 0 16.5 C 0 25.328125 7.160156 32.484375 16 32.484375 C 24.839844 32.484375 32 25.328125 32 16.5 C 32 7.671875 24.839844 0.515625 16 0.515625 Z M 16 29.390625 C 8.882812 29.390625 3.097656 23.609375 3.097656 16.5 C 3.097656 9.390625 8.882812 3.609375 16 3.609375 C 23.117188 3.609375 28.902344 9.390625 28.902344 16.5 C 28.902344 23.609375 23.117188 29.390625 16 29.390625 Z M 10.839844 15.46875 C 11.980469 15.46875 12.902344 14.546875 12.902344 13.40625 C 12.902344 12.265625 11.980469 11.34375 10.839844 11.34375 C 9.695312 11.34375 8.773438 12.265625 8.773438 13.40625 C 8.773438 14.546875 9.695312 15.46875 10.839844 15.46875 Z M 21.160156 15.46875 C 22.304688 15.46875 23.226562 14.546875 23.226562 13.40625 C 23.226562 12.265625 22.304688 11.34375 21.160156 11.34375 C 20.019531 11.34375 19.097656 12.265625 19.097656 13.40625 C 19.097656 14.546875 20.019531 15.46875 21.160156 15.46875 Z M 21.417969 20.148438 C 20.078125 21.757812 18.097656 22.6875 16 22.6875 C 13.902344 22.6875 11.921875 21.765625 10.582031 20.148438 C 10.03125 19.492188 9.050781 19.40625 8.398438 19.949219 C 7.742188 20.496094 7.65625 21.46875 8.199219 22.125 C 10.136719 24.445312 12.980469 25.773438 16 25.773438 C 19.019531 25.773438 21.863281 24.445312 23.800781 22.125 C 24.347656 21.46875 24.257812 20.496094 23.601562 19.949219 C 22.949219 19.40625 21.96875 19.492188 21.417969 20.148438 Z M 21.417969 20.148438 "
            />
          </svg>
        </button>
        <textarea
          className="widget-footer__textarea"
          placeholder="Введите сообщение..." ></textarea>
        <button className="widget-footer__btn btn__submit">
          <svg xmlns="http://www.w3.org/2000/svg" widget="20px" height="20px" viewBox="0 0 32 32">
            <path
              fill="#f9fefe"
              d="M 29.75 0.199219 L 0.78125 16.914062 C -0.351562 17.5625 -0.207031 19.136719 0.917969 19.613281 L 7.5625 22.398438 L 25.519531 6.574219 C 25.863281 6.269531 26.351562 6.738281 26.054688 7.09375 L 11 25.4375 L 11 30.46875 C 11 31.945312 12.78125 32.523438 13.65625 31.457031 L 17.625 26.625 L 25.414062 29.886719 C 26.300781 30.261719 27.3125 29.707031 27.476562 28.75 L 31.976562 1.75 C 32.1875 0.488281 30.832031 -0.425781 29.75 0.199219 Z M 29.75 0.199219 "
            />
          </svg>
        </button>
      </form>
    </div>
  );
}

export default WidgetFooter;
