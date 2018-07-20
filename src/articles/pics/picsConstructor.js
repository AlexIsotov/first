import React, { Component } from 'react';


export class PicsConstructor extends Component {
	
	
    render() {
		const {imgsrc, keyy} = this.props;
		
        return (
		
            
	<img data-toggle="tooltip" data-placement="top" title="Clik to open photocarousel"
	src={imgsrc} alt={keyy} height={'25%'} width={'25%'}
	onClick={this.toggleModal}
	className="rounded border border-secondary"/>
   	
		);
    }
};
export default PicsConstructor;