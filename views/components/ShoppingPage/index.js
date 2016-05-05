/*
<<<<<<< HEAD
* gou mai shang pin 
*/

import React from 'react';
import styles from './styles';
import Container from '../Container';
import ShoppingMenu from '../ShoppingMenu';


function onChange(value) {
  console.log(value);
}
class ShoppingPage extends React.Component {
  render() {
  	return(
      <Container className={styles.container}>
        <div className={styles.left}>
        	<ShoppingMenu/>
        </div>
        <div className={styles.right}>
          	{ this.props.children }
        </div>
      </Container>
    )
  }
}

export default ShoppingPage;

