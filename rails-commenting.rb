# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Controller for BlogPosts that inherits values, meathods and other from the Application Controller. The BlogPosts Controller is responsible for rendering methods that are needed to MVC the database.
class BlogPostsController < ApplicationController
  def index
    # ---2) we have an instance variable which is a @post and it is assigned to showing all of the entries that we have within the db
    @posts = BlogPost.all
  end

  # ---3) SHOW is one of the restful routs which responds (READ in CRUD) (GET in HTTP Verbs) and shows one item that is requested
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) NEW is one of the restful routs which responds (READ in CRUD) (GET in HTTP Verbs) which shows us the form that allows to create a new entrie. This is not creating a new entrie, it allows us to fill out the given keys with needed values. Goes hand in hand with create.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) we have an instance variable which is a @post and it is assigned to creating an entrie with an assigned param = blog_post_params (which, on the other hand, is passing keys:values where keys that we pass are allowed to be edited, furthermore it is created within a PRIVATE method as the keys that we are passing in there are the only thing that user is allowed to change and edit, we don't want a user to edit what we don't want the user to edit)
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) we have yet another instance variable which is a @post and it is assigned to find a particular db entrie and display that entrie for edit. The EDIT restful rout goes hand in hand with update. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this instance variable allows us to update the db entrie by providing what key:values are alowed to be edited in param that is passed within the private method of the code. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) redirect_to is the built in methods that sends user when an action is performed. In this instance i will be guessing that it will redirect user, after deleting  a post, to main page.
      redirect_to blog_posts_path
    end
  end

  # ---9) private a built in method. Anything below private line is not seen by the user and can not be edited. This is done in case a perpetrator cannot cause harm by having accesss to the built in data base.
  private
  def blog_post_params
    # ---10) this is what we allow a user to see and edit.
    params.require(:blog_post).permit(:title, :content)
  end
end
