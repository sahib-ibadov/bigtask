import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { AddData } from '../../../redux/Slice/dataSlice'


function Formik() {
  const data =useSelector(state=>state.Books)
  const dispatch = useDispatch()
    const formik = useFormik({
      initialValues: {
        name: '',
        unitPrice: ''
      },
      onSubmit: values => {
        
        dispatch(AddData(values))
        console.log(values)
      }
    })
  return (
    <div>
      <button type="button" class="btn btn-primar" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{width:"400px", height:"60px", backgroundColor:"gray", marginTop:"300px ", marginLeft:"600px", color:"white"}}>
        Addto Books
      </button>


      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onSubmit={formik.handleSubmit}>


                <label htmlFor="id">id</label>
                <input
                style={{marginLeft:"50px"}}
                  id="id"
                  name="id"
                  type="id"
                  onChange={formik.handleChange}
                  value={formik.values.id}
                /> <br/>



                <label htmlFor="firstName">name</label>
                <input
                style={{marginLeft:"25px"}}
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                /><br/>

                <label htmlFor="lastName">unitPrice</label>
                <input style={{marginLeft:"1px"}}
                  id="unitPrice"
                  name="unitPrice"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.unitPrice}
                />
                  <br/>
                <label htmlFor="lastName">Image</label>
                <input
                style={{marginLeft:"19px"}}
                  id="image"
                  name="image"
              
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.unitPrice}
                />

        <br/>

                <button type="submit" style={{marginTop:"20px", color:"white", backgroundColor:"gray"}}>Submit</button>
                
              
              </form>
            </  div>
          </div>
        </div>
      </div>
    
      </div>
  )
}

export default Formik