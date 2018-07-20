import React, { Component } from 'react';
import PicsConstructor from './picsConstructor';
import DemoCarousel from '../../demoCarousel';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class Pics extends Component {
 constructor(props){
		super(props);
		
		this.state={
			modal: false,
			}
	
	}
	toggleModal=()=> {
		this.setState({
		modal: !this.state.modal,
		});
	}
    render() {
		const {imgsrc} = this.props;
		
        return (
		<div className="d-flex flex-wrap" onClick={this.toggleModal}>
            	{imgsrc.map((images, i)=>{
							return(
							<PicsConstructor imgsrc={images} key={i}/>
                   			)
					})
				
				}
		<Modal isOpen={this.state.modal} toggle={this.toggleModal} size={'lg'} className={this.props.className}>
					<ModalHeader className="text-right" toggle={this.toggleModal}>Photo</ModalHeader>
					<ModalBody>
					 <DemoCarousel imgsrc={this.props.imgsrc}/>   
					</ModalBody>
					
					<ModalFooter>
						<button className="btn btn-secondary btn-lg btn-block" onClick={this.toggleModal}>Cancel</button>
					</ModalFooter>
		</Modal>
		</div>
		);
    }
};
export default Pics;