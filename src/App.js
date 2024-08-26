import './css/style.css';

function App() {
  return (
    <div className='p-3'>

      <div class="container mt-10 ">

        <div class="card">

          <div className="card-body ">
            <div className="row ">
              <div className="col-md-12">
                <h4>Add New Contact</h4>

                <form className="border border-2 border-primary p-3 mt-10">
                  <div className="form-group">
                    <label class="mb-2 fw-bold">Station Address</label>
                    <input type="text" class="form-control" required="" name="address" />
                  </div>

                  <div className="form-group">
                    <label class="mb-2 mt-2 fw-bold">Telephone Number</label>
                    <input type="text" class="form-control" required="" name="telephone" value="" />
                  </div>
                  <hr />
                  <div className="mt-10">
                    <button type="button" class="btn btn-primary"> Save Contact</button>
                  </div>
                </form>

              </div>
            </div>

            <div className="table-wrapper mt-5 mb-2 border border-2 p-3">
              <h4>Contact List</h4>

              <div className='info-wrapper mb-2'>
                <p> Keffi and environs.. <span>08022334455</span></p>

                <div className='btn-group '>
                  <button className='btn btn-warning'>Edit</button>
                  <button className='btn btn-danger'>Remove</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
