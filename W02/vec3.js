class Vec3
{
    constructor(x,y,z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v)
    {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    subtract(v)
    {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    min()
    {
        var min = this.x
        if(min > this.y)
        {
            min = this.y
        }
        if(min > this.z)
        {
            min = this.z
        }
        return min;
    }

    max()
    {
        var max = this.x
        if(max < this.y)
        {
            max = this.y
        }
        if(max < this.z)
        {
            max = this.z
        }
        return max;
    }

    mid()
    {
        if((this.x >= this.y && this.y >= this.z) || (this.x <= this.y && this.y <= this.z))
        {
            return this.y;
        }
        else if((this.y >= this.x && this.x >= this.z) || (this.y <= this.x && this.x <= this.z))
        {
            return this.x;
        }
        else
        {
            return this.z;
        }
    }

    
}
