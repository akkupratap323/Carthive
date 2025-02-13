import React, { useEffect } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { SlSocialGoogle } from "react-icons/sl";
import LogoutBtn from '../components/LogoutBtn';
import { profileActions } from '../store/profileSlice';

function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch('/api/getUserProfile');
      const userProfile = await response.json();
      if (userProfile) {
        dispatch(profileActions.addProfile(userProfile));
      }
    };

    fetchProfile();
  }, [dispatch]);

  const profileStatus = useSelector((Store) => Store.ProfileStatus);
  const profileImage = profileStatus.profile.image || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp';
  console.log(profileStatus.profile.image);

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white d-flex flex-column align-items-center justify-content-center"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={profileImage}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{profileStatus.profile.name}</MDBTypography>
                  <MDBCardText></MDBCardText>
                  <MDBIcon fas icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">{profileStatus.profile.name}</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{profileStatus.profile.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">+91***********</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Balance</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Total Invest</MDBTypography>
                        <MDBCardText className="text-muted">102020</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">UID</MDBTypography>
                        <MDBCardText className="text-muted">{profileStatus.profile.uid}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                    <div className="d-flex justify-content-start">
                      <a href="#!" style={{ fontSize: '24px', marginRight: '15px', color: '#3b5998', transition: 'color 0.3s' }}>
                        <CiFacebook />
                      </a>
                      <a href="#!" style={{ fontSize: '24px', marginRight: '15px', color: '#00acee', transition: 'color 0.3s' }}>
                        <CiTwitter />
                      </a>
                      <a href="#!" style={{ fontSize: '24px', marginRight: '15px', color: '#DB4437', transition: 'color 0.3s' }}>
                        <SlSocialGoogle />
                      </a>
                    </div>
                    <div className="mt-3">
                      <LogoutBtn />
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default Profile;
