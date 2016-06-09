class CreatePostFormController{
    constructor(API, ToastService,$location){
        'ngInject';
      
        this.API = API;
        this.ToastService = ToastService;
        this.$location = $location;
    }
  
   submit(){
      var data = {
        name: this.name,
        topic: this.topic
      };
      
       this.API.all('posts').post(data).then((response) => {
         this.ToastService.show('Post added successfully');
         this.name='';
         this.topic='';
         this.$location('/show-posts');
       });
    }
}

export const CreatePostFormComponent = {
    templateUrl: './views/app/components/create_post_form/create_post_form.component.html',
    controller: CreatePostFormController,
    controllerAs: 'vm',
    bindings: {}
}