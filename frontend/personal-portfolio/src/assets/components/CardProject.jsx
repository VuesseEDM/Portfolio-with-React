
function ProjectCard({ image, alt, title, url }) {
  return (
    <div className="card">
      <img className="preview" src={image} alt={alt} title={alt} loading="lazy"/>
      <button className="title-card">
        <a href={url}>{title}</a>
      </button>
    </div>
  );
}

export default ProjectCard;
