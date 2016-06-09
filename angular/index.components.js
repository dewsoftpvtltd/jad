import {ShowPostTaComponent} from './app/components/show_post_ta/show_post_ta.component';
import {ShowPostTableComponent} from './app/components/show_post_table/show_post_table.component';
import {CreatePostFormComponent} from './app/components/create_post_form/create_post_form.component';
import {ResetPasswordComponent} from './app/components/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './app/components/forgot-password/forgot-password.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {RegisterFormComponent} from './app/components/register-form/register-form.component';

angular.module('app.components')
	.component('showPostTa', ShowPostTaComponent)
	.component('showPostTable', ShowPostTableComponent)
	.component('createPostForm', CreatePostFormComponent)
	.component('resetPassword', ResetPasswordComponent)
	.component('forgotPassword', ForgotPasswordComponent)
	.component('loginForm', LoginFormComponent)
	.component('registerForm', RegisterFormComponent);

