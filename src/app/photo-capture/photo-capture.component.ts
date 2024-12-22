import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-photo-capture',
  templateUrl: './photo-capture.component.html',
  styleUrl: './photo-capture.component.css'
})
export class PhotoCaptureComponent {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  isCameraActive=false;
  imageData: String | null=null;

  openCamera():void {
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
      navigator.mediaDevices
      .getUserMedia({video:true})
      .then((stream)=>{
        const video= this.videoElement.nativeElement;
        video.srcObject= stream;
        video.style.display='block';
        this.isCameraActive= true;
      })
      .catch((error)=>{
        console.error('Error al acceder a la cámara:', error);
        alert('No se pudo acceder a la cámara. Por favor, verifica los permisos.');
      });  
    }else{
      alert('Tu navegador no soporta la captura de video.');
    }
  }

  captureImage(): void{
    const video= this.videoElement.nativeElement;
    const canvas= document.createElement('canvas');
    const context= canvas.getContext('2d');
    if(context){
      canvas.width=video.videoWidth;
      canvas.height= video.videoHeight;
      context.drawImage(video, 0,0, canvas.width,canvas.height);
      this.imageData=canvas.toDataURL("image/png");
      console.log('Data URL Capturado:', this.imageData);
      this.stopCamara();
    }
  }

  stopCamara():void{
    const stream= this.videoElement.nativeElement.srcObject as MediaStream;
    if(stream){
      stream.getTracks().forEach((track)=> track.stop());
    }
    this.videoElement.nativeElement.style.display='none';
    this.isCameraActive=false;
  }

  onFileSelected(event:any): void{
    const file= event.target.files[0];
    if(file){
      const reader= new FileReader;
      reader.onload = (e: any) =>{
        this.imageData =e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  continue():void{
    alert("Continuando al siguiente paso...")
  }
}
