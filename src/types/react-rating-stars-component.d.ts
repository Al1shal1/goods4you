declare module 'react-rating-stars-component' {
  import { Component } from 'react';

  export interface ReactStarsProps {
    classNames?: string;
    count?: number;
    value?: number;
    size?: number;
    activeColor?: string;
    color?: string;
    edit?: boolean;
  }

  export default class ReactStars extends Component<ReactStarsProps> { }
}