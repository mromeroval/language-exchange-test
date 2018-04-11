import React from 'react'
import Dropzone from 'react-dropzone'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import * as flashMessageAction from "../../actions/flashMessageActions"
import { withRouter, Redirect } from 'react-router-dom';
import * as userActions from '../../actions/userActions';

class UploadFile extends React.Component {
  constructor() {
    super();
    this.sendFile = this.sendFile.bind(this);;
    this.state = {
      files:[],
      accepted: [],
      rejected: [],
      redirect:false,
      preview : ""
    }
    
  }
    componentDidMount(){
      this.props.fetchCurrentUser();
   }

    onImageDrop(accepted, rejected ){
      const directory_exists = this.props.userState.directory_exists.toString();
      const user_id = this.props.userState.current.id;
      const createUserDirectoryAndSave = this.props.createUserDirectoryAndSave;
<<<<<<< HEAD
      const setState = this.setState.bind(this);
      const blob = accepted[0].preview;

        if (accepted.length && directory_exists === "true"){
          this.sendFile(accepted, user_id);
          setState({
            preview : <div>
                        <a href="/users/profile" className="btn btn-success">View Profile</a>
                        <br/>
                        <img src={blob} alt="avatar"/>
                      </div>
          , accepted, rejected }
          )
=======
      this.setState({ accepted, rejected }); 

        if (accepted.length && directory_exists === "true"){
          this.sendFile(accepted, user_id)
>>>>>>> 369533d448f0ab73c24b84cf3c3518c8d3f446b1
        }else if( directory_exists === "false"){
          createUserDirectoryAndSave(accepted,user_id)
        }else{
          console.log("File was rejected");
        }
    }

    sendFile=(accepted, user_id)=>{
      const saveUserAvatar = this.props.saveUserAvatar;
<<<<<<< HEAD
      saveUserAvatar(accepted, user_id);
=======

      saveUserAvatar(accepted, user_id);
      
      const setState = this.setState.bind(this);
      // // const userState = this.props.userState;
      const blob = accepted[0].preview;
      setState({
        preview : <div> <a href="/users/profile"className="btn btn-success">View Profile</a><br/><img src={blob}  alt="avatar"/></div>
      })
          // if(!userState.fetching){
          //   setState({ redirect: true });
          // }       
>>>>>>> 369533d448f0ab73c24b84cf3c3518c8d3f446b1
    }

    createDirectoyAndSaveFile=(accepted, user_id)=>{

    }
    
    render() {
<<<<<<< HEAD

=======
      // const directory_exists = this.props.userState.directory_exists.toString();
>>>>>>> 369533d448f0ab73c24b84cf3c3518c8d3f446b1
      const filePreview = this.state.preview;
      const {redirect} = this.state;
      
        if (redirect) {
          return <Redirect to='/users/profile' />;
        }else{

          return (
            <div className="container">
              <div className="row">
                <div className="col-sm-12">

                <div className="panel panel-default">
                <div className="panel-heading"><h4><span className="glyphicon glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;Profile Picture </h4></div>
                <div className="panel-body">

                <div>
                {/* directory_exists { directory_exists } */}
                </div>

                <section>
                  <div className="dropzone">
                    <Dropzone
                        accept="image/jpg, image/jpeg, image/png"
                        multiple = {false}
                        maxSize = {1048576}
                        onDrop={ (accepted,rejected)=>                
                                this.onImageDrop(accepted, rejected)
                        }
                    >
                      <p className="text-center">Drop files here, or click to select files to upload.</p>
                    </Dropzone>
                  </div>
                  <br />
                  <aside>

                  <ul className="list-group">
                    {  this.state.accepted.map(f => <li className="list-group-item list-group-item-success" key={f.name}>{f.name} - {f.size} bytes</li>) }
                    { this.state.rejected.map(f => <li className="list-group-item list-group-item-danger" key={f.name}> {f.name} - {f.size } bytes</li>) }
                  </ul>
                </aside>
                </section>

                <div>
                   { filePreview }
                </div>

                </div>
              </div>
              </div>
              </div>
            </div>  
          );
        }
      }
    }

  function mapStateToProps(state){
    return {  userState : state.userState,
              // flashMessage : state.flashMessage
            }
 }
 
 function mapDispatchToProps(dispatch){
    return  bindActionCreators({
      fetchCurrentUser : userActions.fetchCurrentUser,
      updateUserAvatar : userActions.updateUserAvatar,
      deleteUserAvatar : userActions.deleteUserAvatar,
      saveUserAvatar : userActions.saveUserAvatar,
      checkUserDirectory : userActions.checkUserDirectory,
      createUserDirectory : userActions.createUserDirectory,
      createUserDirectoryAndSave : userActions.createUserDirectoryAndSave    
      // sendFlashMessage : flashMessageAction.sendFlashMessage
    }, dispatch)
 }

 export default withRouter( connect(mapStateToProps, mapDispatchToProps)(UploadFile));