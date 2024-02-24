extern crate rocket;
use rocket::fs::{relative, FileServer};
use rocket::{launch, routes};
use rocket_dyn_templates::Template;
pub mod models;
pub mod schema;
mod services;

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![services::create_post])
        .mount("/", routes![services::get_post])
        .mount("/", routes![services::list_posts])
        .mount("/", routes![services::health])
        .mount("/public", FileServer::from(relative!("static")))
        .attach(Template::fairing())
}
