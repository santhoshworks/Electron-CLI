// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Shell.css';
import routes from '../constants/routes';
import { type } from '../../flow-typed/npm/prettier_v1.x.x';
import command from '../core/command';

type Props = {
  increment: () => void,
  incrementIfOdd: () => void,
  incrementAsync: () => void,
  decrement: () => void,
  counter: number
};

export default class Shell extends Component<Props> {
  props: Props;

  getTextBox = () => {
    return (
      <input type="text" id="command" className={styles.commandInput} onKeyDown={(e) => {
        console.log(e.keyCode);
        if(e.keyCode === 13) {
          command(e.target.value);
        }
      }} />
    );
  }


  render() {
    const {
      increment,
      incrementIfOdd,
      incrementAsync,
      decrement,
      counter
    } = this.props;
    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div data-id="counter">
          {this.getTextBox()}
        </div>
        <div data-id="output">
          
        </div>
        <div className="hints"> 
            
        </div>
      </div>
    );
  }
}
