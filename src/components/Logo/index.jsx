import { Container } from "./styles";


export function Logo(props) {
  return (
    <svg
      width="30"
      height="35"
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Polygon 1"
        d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z"
        fill={props.fill}
      />
    </svg>
  );
}
