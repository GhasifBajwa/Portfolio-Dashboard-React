import React from "react"

export default function Personal() {
  return (
    <div className="container-fluid my-4">
      <h1 className="mb-4">Personal Information</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5>Add Personal Information</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="phone number"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="budget"
                    className="form-control"
                    placeholder="Budget$ For Project"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Tell us about yourself"
                    required
                  />
                </div>
                <button type="submit" className="btn">
                    Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

