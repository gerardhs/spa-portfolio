import "../../../styles/graphics.css";
import { Transition } from "@headlessui/react";

export default function WindowGraphic() {
  return (
    <div className="flex items-end">
      <Transition
        className="flex items-end"
        appear={true}
        show={true}
        enter="transition-transform duration-500 delay-[2.5s]"
        enterFrom="translate-y-3"
        enterTo=""
        leave="transition-opacity"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="flex flex-row items-end">
          <svg
            width="600"
            height="600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`relative top-[4.5rem]`}
          >
            <path
              className="desktop-animated"
              d="M16 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V4.6C21 4.03995 21 3.75992 20.891 3.54601C20.7951 3.35785 20.6422 3.20487 20.454 3.10899C20.2401 3 19.9601 3 19.4 3H13.6C13.0399 3 12.7599 3 12.546 3.10899C12.3578 3.20487 12.2049 3.35785 12.109 3.54601C12 3.75992 12 4.03995 12 4.6V6M10 21V18M7 21H13M6.2 18H13.8C14.9201 18 15.4802 18 15.908 17.782C16.2843 17.5903 16.5903 17.2843 16.782 16.908C17 16.4802 17 15.9201 17 14.8V9.2C17 8.0799 17 7.51984 16.782 7.09202C16.5903 6.71569 16.2843 6.40973 15.908 6.21799C15.4802 6 14.9201 6 13.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
              strokeLinecap="round"
              stroke="black"
              strokeWidth={"0.5"}
            />
          </svg>
        </div>
        <div className="relative top-[1.2rem] right-16">
          <svg
            width="150"
            height="150"
            viewBox="0 0 800  600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                className="mug-animated"
                stroke="#000"
                d="m203.43204,584.11247l316.43114,0c45.61145,-0.11106 76.72797,-50.59556 76.57607,-102.53276l0,-34.92245c90.30474,-0.09329 155.82225,-89.31634 155.7885,-193.35511c0.03376,-105.89129 -64.19765,-192.88865 -138.961,-192.81312l-487.74077,0l0,421.09956c0.07089,57.18378 37.49645,102.4217 77.90606,102.52388zm392.99708,-444.41377l0,0l16.82749,0c61.86847,-0.12883 81.71377,76.87292 81.41671,114.18098c0.06076,60.24022 -33.84065,118.01485 -98.24421,112.40842l0,-226.5894z"
                strokeWidth="36"
                fill="none"
              />
            </g>
          </svg>
        </div>
      </Transition>
    </div>
  );
}
