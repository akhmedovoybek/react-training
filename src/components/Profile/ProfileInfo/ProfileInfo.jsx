import c from './ProfileInfo.module.css';

const ProfileInfo = (props)=>{
    return (
      <div className={c.content}>
        <img className='rounded' src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
        <div className={c.info}>
          <div>ava + description</div>
        </div>
      </div>
    );
}

export default ProfileInfo;