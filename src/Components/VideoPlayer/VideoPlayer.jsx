export default function VideoPlayer({url}) {
  return (
    <div className="video">
      <video src={url} width="100%" controls controlsList="nodownload"/>
    </div>
  )
}