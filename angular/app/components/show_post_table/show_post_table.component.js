class ShowPostTableController{
    constructor(API,ToastService){
      'ngInject';
      this.API = API;
      this.ToastService = ToastService;
    }

    getPosts(){
        this.API.all('post/all').get('')
        .then((response) => {
            this.posts = response.data["posts"];
        });
    }

    $onInit(){
       this.getPosts();
    }

}

export const ShowPostTableComponent = {
    templateUrl: './views/app/components/show_post_table/show_post_table.component.html',
    controller: ShowPostTableController,
    controllerAs: 'vm',
    bindings: {}
}
