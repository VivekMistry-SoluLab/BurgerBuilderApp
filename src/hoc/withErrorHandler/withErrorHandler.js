import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Auxx from '../Auxx/Auxx'

const WithErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        componentWillMount() {
            this.reqIntercepter = axios.interceptors.request.use(req => {
                this.setState({error:null});
                return req;
            });
            this.resIntercepter = axios.interceptors.response.use(res => res, error => {
                this.setState({error:error})
            })
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqIntercepter);
            axios.interceptors.response.eject(this.resIntercepter);
        }

        errorHandler = () => {
            this.setState({error:null})
        }
        render() {
            return(
                <Auxx>
                <Modal 
                    show={this.state.error}
                    modalClosed={this.errorHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props}/>
            </Auxx>
            )
        }
    }
}

export default WithErrorHandler