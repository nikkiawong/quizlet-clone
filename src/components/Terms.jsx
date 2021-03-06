import React from 'react';
import PropTypes from 'prop-types';


function Terms(props) {
  const termDivContainer = {
    width: '30%',
    fontWeight: 'bold',
    color: '#455358',
    margin: '0 auto',
    marginBottom: '28px',
    boxShadow: '2px 4px 17px 1px rgba(0,0,0,0.29)'
  }
  const termTitleStyles = {
    color: '#455358',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingBottom: '15px'
  }
  const pictureStyles = {
    width: '100%',
    marginBottom: '10px'
  }
  const detailInformationDiv = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    marginBottom: '6px',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingBottom: '10px'
  }
  const authorNameStyles = {
    fontSize: '.875rem',
    color: '#3ccfcf',
    marginLeft: '10px',
    paddingRight: '10px'
  }
  const termsNumberStyles = {
    fontSize: '.875rem',
    borderRight: '1px solid #DFDFDF',
    paddingRight: '13px'
  }
  const profileInfoStyles = {
    display: 'flex',
    alignItems: 'center'
  }
  const profilePicStyles = {
    borderRadius: '50%',
    width: '25px'
  }
  const statusStyles = {
    fontSize: '.7rem',
    textTransform: 'uppercase',
    color: '#97a5aa',
    letterSpacing: '1.2px'
  }

  return(
    <div className="card-styles" style={termDivContainer}>
      <style jsx>{`
        .card-styles {
          transition-timing-function: cubic-bezier(.17,.67,.83,.67);
        }
        .card-styles:hover {
          border-bottom: 4px solid #F8C238;
        }
      `}</style>
      <img style={pictureStyles} src={props.photo}></img>
      <div style={detailInformationDiv}>
        <p style={termsNumberStyles}>{props.terms} terms</p>
        <div style={profileInfoStyles}>
          <img style={profilePicStyles}src={props.profilePic}></img>
          <p style={authorNameStyles}>{props.author}</p>
        </div>
        <p style={statusStyles}>{props.status}</p>
      </div>
      <h3 style={termTitleStyles}>{props.title}</h3>
    </div>
  );
}

Terms.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.string,
  terms: PropTypes.string.isRequired,
  photo: PropTypes.string,
  profilePic: PropTypes.string.isRequired
}

export default Terms;
