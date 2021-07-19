import ResultCard from 'components/ResultCard';

import './styles.css';
import { useState } from 'react';
import axios from 'axios';
import ProfileLoader from './ProfileLoader';

type FormData = {
  user: string;
};

type InfoUser = {
  name: string;
  url: string;
  followers: string;
  location: string;
  avatar_url: string;
};

const ProfileSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });
  const [infoUser, setInfoUser] = useState<InfoUser>();
  const[isLoading, setIsLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        console.log(response.data);
        setInfoUser(response.data);
      }).finally(()=>{
        setIsLoading(false);
      });
  };
  return (
    <>
      <div className="profile-search-main-container">
        <div className="search-card-container">
          <h1>Encontre um perfil Github</h1>
          <div className="search-container">
            <form onSubmit={handlerSubmit}>
              <div className="form-container">
                <input
                  type="text"
                  name="user"
                  value={formData.user}
                  className="search-input"
                  placeholder="Usuário Github"
                  onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary search-button">
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        {isLoading ?<ProfileLoader/> :infoUser && (
          <div className="result-card-container">
            <div className="image-container">
              <img src={infoUser.avatar_url} alt="tsr" />
            </div>
            <div className="info-container">
              <p className="txt-head">Informações</p>
              <ResultCard title="Perfil: " description={infoUser.url} />
              <ResultCard
                title="Seguidores: "
                description={infoUser.followers}
              />
              <ResultCard
                title="Localidade: "
                description={infoUser.location}
              />
              <ResultCard title="Nome: " description={infoUser.name} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileSearch;
